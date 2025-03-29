import UserDTO from '../src/dto/User.dto.js';
import chai from 'chai';

const expect = chai.expect;

describe('testa funcionalidade do UserDTO', () => {
  const user = {
    first_name: 'João',
    last_name: 'Silva',
    role: 'admin',
    email: 'joao@email.com',
    password: '123456'
  }

  it('deve unificar o nome do usuário', () => {
    const userDTO = UserDTO.getUserTokenFrom(user);
    expect(userDTO.name).to.equal('João Silva');
    expect(userDTO).to.have.property('name', 'João Silva');
  });

  it('deve remover as propriedades desnessárias', () => {
    const userDTO = UserDTO.getUserTokenFrom(user);
    expect(userDTO).to.not.have.property('password');
    expect(userDTO).to.not.have.property('first_name');
    expect(userDTO).to.not.have.property('last_name');
  });
});