import chai from 'chai';
import e from 'express';
import supertest from 'supertest';

const expect = chai.expect;
const request = supertest('http://localhost:8080');

describe('Teste Adoptme', () => {
  describe('tests pets', () => {
    it("teste POST - cria um pet corretamente", async () => {
      // arrange
      const mockPet = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010"
      }

      // act
      const { statusCode, ok, _body } = await request.post("/api/pets").send(mockPet);
      // console.log({ statusCode, ok, _body });

      // assert
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.true;
      expect(_body.payload.name).to.be.equal(mockPet.name);
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload.adopted).to.be.false;
    });

    it("teste POST sem nome - não cria o pet", async () => {
      const petMock = {
        specie: "dog",
        birthDate: "10-10-2010"
      }

      const { statusCode, ok, _body } = await request.post("/api/pets").send(petMock);
      // console.log({ statusCode, ok, _body });

      expect(statusCode).to.be.equal(400);
      expect(ok).to.be.false;
      expect(_body.error).to.be.equal("Incomplete values");
    });

    it("teste GET - retorna todos os pets", async () => {
      const { statusCode, ok, _body } = await request.get("/api/pets");
      // console.log({ statusCode, ok, _body });

      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.true;
      expect(_body.payload).to.be.an("array");
    });

    it("teste GET/id - retorna um pet por id", async () => {
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010"
      }
      const pet = await request.post("/api/pets").send(petMock);

      const { _id } = pet.body.payload;

      const { statusCode, ok, _body } = await request.get(`/api/pets/${_id}`);

      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.true;
      expect(_body.payload).to.be.an("object");
      expect(_body.payload._id).to.be.equal(_id);
    });

    it("test PUT retorna um pet atualizado", async () => {
      // arrange
      const petMock = {
        name: "bolinha",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);

      // act
      const { statusCode, ok, _body } = await request
        .put(`/api/pets/${pet.body.payload._id}`)
        .send({ name: "bolinha atualizada" });
      
        // console.log({ _body });

      // assert
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload.name).to.not.be.deep.equal('bolinha');
      expect(_body.payload.name).to.be.deep.equal('bolinha atualizada');
    });

    it("test DELETE retorna um pet deletado", async () => {
      // arrange
      const petMock = {
        name: "bolinha",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);

      // act
      const { statusCode, ok, _body } = await request.delete(
        `/api/pets/${pet.body.payload._id}`
      );
      const result = await request.get(`/api/pets/${pet.body.payload._id}`);
      // console.log(result.body);
      // assert
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.message).to.be.equal('pet deleted');
      expect(result.body.payload).to.be.equal(null);
    });
  });

  describe('Teste rota /login e /current', () => {
    let cookie;

    // it('Deve registrar corretamente um usuário', async () => {
    //   const mockUser = {
    //     first_name: 'João',
    //     last_name: 'Silva',
    //     email: 'joao.teste@email.com',
    //     password: '123456'
    //   }

    //   const {_body } = await request.post('/api/sessions/register').send(mockUser);

    //   expect(_body.payload).to.be.ok;
    // });

    it('Deve logar corretamente o usuário e retornar um cookie', async () => {
      const mockUser = {
        email: 'joao.teste@email.com',
        password: '123456'
      }

      const result = await request.post('/api/sessions/login').send(mockUser);
      const cookieResult = result.headers['set-cookie'][0];

      expect(cookieResult).to.be.ok;

      cookie = {
        name: cookieResult.split('=')[0],
        value: cookieResult.split('=')[1]
      }

      expect(cookie.name).to.be.ok.and.eql('coderCookie');
      expect(cookie.value).to.be.ok;
    });

    it('Deve enviar o cookie que contém o usuário e desestrutura-lo corretamente', async () => {
      const { _body } = await request.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`]);

      expect(_body.payload).to.be.ok;
      expect(_body.payload.email).to.be.ok.and.eql('joao.teste@email.com');
    });
  });

  describe("unprotected login", () => {
    let cookie;
    it('erro ao tentar fazer o login sem o email', async () => {
      const mockUser = { password: "123" };

      const { statusCode, ok, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      
        expect(statusCode).to.be.equal(400);
        expect(ok).to.be.equal(false);
        expect(_body.error).to.be.equal("Incomplete values");
    });

    it('erro quando o usuario não existe', async () => {
      const mockUser = { email: "teste@teste.com.br", password: "123" };

      const { statusCode, ok, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      
      expect(statusCode).to.be.equal(404);
      expect(ok).to.be.equal(false);
      expect(_body.error).to.be.equal("User doesn't exist");
    });

    it('erro quando a senha está errada', async () => {
      const userMock = {
        first_name: "Alê",
        last_name: "Rezende",
        email: "ale.teste@email.com",
        password: "123"
      }

      const user = await request.post("/api/sessions/register").send(userMock);

      const { statusCode, ok, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send({ email: "ale.teste@email.com", password: "1234" });
      // console.log({_body});
      
      expect(statusCode).to.be.equal(400);
      expect(ok).to.be.equal(false);
      expect(_body.error).to.be.equal("Incorrect password");
    });

    it('login com sucesso', async () => {
      const userMock = {
        first_name: "Alê",
        last_name: "Rezende",
        email: "ale.teste@email.com",
        password: "123"
      }

      await request.post("/api/sessions/register").send(userMock);
      
      const result = await request
        .get("/api/sessions/unprotectedLogin")
        .send({ email: userMock.email, password: userMock.password });
      
      const cookieResult = result.headers['set-cookie'][0];

      expect(cookieResult).to.be.ok;

      cookie = {
        name: cookieResult.split('=')[0],
        value: cookieResult.split('=')[1]
      }
     
      expect(cookie.name).to.be.ok.and.eql('unprotectedCookie');
      expect(cookie.value).to.be.ok;

      expect(result.statusCode).to.be.equal(200);
      expect(result.ok).to.be.equal(true);
      expect(result._body.message).to.be.equal('Unprotected Logged in');
    });

    it('Deve enviar o cookie que contém o usuário e desestrutura-lo corretamente', async () => {
      const { _body } = await request
        .get('/api/sessions/unprotectedCurrent')
        .set('Cookie', [`${cookie.name}=${cookie.value}`]);

      expect(_body.payload).to.be.ok;
      expect(_body.payload.email).to.be.ok.and.eql('ale.teste@email.com');
    });
  });

  describe("pets com imagem", () => {
    it("deve criar um pet com imagem, pela rota /withimage", async () => {
      const petMock = {
        name: "Fifi",
        specie: "cat",
        birthDate: "10-10-2010"
      };

      const result = await request
        .post("/api/pets/withimage")
        .field("name", petMock.name)
        .field("specie", petMock.specie)
        .field("birthDate", petMock.birthDate)
        .attach("image", "./src/public/img/teste.png");
      
      expect(result.ok).to.be.true;
      expect(result._body.payload).to.have.property("image");
      expect(result._body.payload.name).to.be.equal(petMock.name);
      expect(result._body.payload.image).to.be.a("string");
    });
  });
});