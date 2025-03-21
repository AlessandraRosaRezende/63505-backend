import bcrypt from 'bcrypt';
import chai from 'chai';

const expect = chai.expect;

describe('bcrypt', () => {
  const senhaOriginal = 'minhaSenhaSecreta';
  let senhaComHash;

  it('deve realizar um hashing efetivo da senha', async () => {
    senhaComHash = await bcrypt.hash(senhaOriginal, 10);
    expect(senhaComHash).to.not.equal(senhaOriginal);
  });

  it('o hash deve poder ser comparado com a senha original', async () => {
    const comparacao = await bcrypt.compare(senhaOriginal, senhaComHash);
    expect(comparacao).to.be.true;
  });

  it('uma senha com hash adulterada não deve corresponder à senha original', async () => {
    const senhaAdulterada = senhaComHash.slice(0, -1) + 'x'; // Adultera o hash
    const comparacao = await bcrypt.compare(senhaOriginal, senhaAdulterada);
    expect(comparacao).to.be.false;
  });
});