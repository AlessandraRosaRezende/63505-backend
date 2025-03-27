import bcrypt from 'bcrypt';
import chai from 'chai';

const expect = chai.expect;

describe('testa funcionalidade do bcrypt', () => {
  const senhaOriginal = 'minhasenhasupersecreta';
  let senhaHash;

  it('deve realizar o hashing da senha', async () => {
    senhaHash = await bcrypt.hash(senhaOriginal, 10);
    expect(senhaHash).to.be.a('string');
    expect(senhaHash).to.not.equal(senhaOriginal);
  });

  it('deve comparar a senha original com o hash', async () => {
    const senhaValida = await bcrypt.compare(senhaOriginal, senhaHash);
    expect(senhaValida).to.be.true;
  });

  it('uma senha com hash adulterada não deve ser válida', async () => {
    const senhaAdulterada = senhaHash.slice(1, 1, 'a');
    const senhaValida = await bcrypt.compare(senhaOriginal, senhaAdulterada);
    expect(senhaValida).to.be.false;
    expect(senhaValida).to.not.equal(senhaOriginal);
  });
});