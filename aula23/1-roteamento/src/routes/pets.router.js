const { Router } = require('express');

const router = Router();

const pets = [{ pet: 'Bob', specie: 'Dog' }, { pet: 'Tom', specie: 'Cat' }, { pet: 'Jerry', specie: 'Mouse' }];

router.param("pet", (req, res, next, pet) => {
  console.log("router.param", pet);

  if (pet.length < 3) {
    return res.status(400).json({ message: 'Pet name must have at least 3 characters' });
  }

  req.pet = pet;

  next();
});

router.get('/', (req, res) => {
  return res.status(200).json(pets);
});

router.get('/:pet', (req, res) => {
  const { pet } = req;

  console.log(req.pet);

  const foundPet = pets.find(p => p.pet === pet);

  if (!foundPet) {
    return res.status(404).json({ message: 'Pet not found' });
  }

  return res.status(200).json(foundPet);
});

router.post('/:pet', (req, res) => {
  console.log(req.pet);
  const { pet } = req;

  const { specie } = req.body;

  const newPet = { pet, specie };

  pets.push(newPet);

  return res.status(201).json(newPet);
});

module.exports = router;