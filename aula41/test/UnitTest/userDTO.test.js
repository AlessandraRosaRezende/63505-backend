import UserDTO from '../../src/dto/User.dto.js'; // Ajuste o caminho conforme necessário
import chai from 'chai';

const expect = chai.expect;

describe('UserDTO', () => {
  const usuario = {
    first_name: 'João',
    last_name: 'Silva',
    role: 'user',
    email: 'joao.silva@example.com',
    password: 'senha123',
  };

  it('deve unificar nome e sobrenome em uma única propriedade "name"', () => {
    const usuarioDTO = UserDTO.getUserTokenFrom(usuario);
    expect(usuarioDTO).to.have.property('name', 'João Silva');
  });

  it('deve remover propriedades desnecessárias', () => {
    const usuarioDTO = UserDTO.getUserTokenFrom(usuario);
    expect(usuarioDTO).to.not.have.property('password');
    expect(usuarioDTO).to.not.have.property('first_name');
    expect(usuarioDTO).to.not.have.property('last_name');
  });

  it('deve manter as propriedades necessárias', () => {
    const usuarioDTO = UserDTO.getUserTokenFrom(usuario);
    expect(usuarioDTO).to.have.property('role', 'user');
    expect(usuarioDTO).to.have.property('email', 'joao.silva@example.com');
  });
});