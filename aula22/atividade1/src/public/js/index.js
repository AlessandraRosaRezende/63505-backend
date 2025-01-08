document.getElementById('loginForm').addEventListener('submit', async (event) => {
  console.log('entrou no evento');
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  try {
    const response = await fetch('/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin', 
        body: JSON.stringify({ email, senha: senha })
      });
    if (response.ok) {
      const data = await response.json();
      console.log("Token recebido: ", data.token);
      console.log('Cookie: ', data.cookie);
    } else if (!response.ok) {
      const error = await response.text(); // Ler a mensagem de erro enviada pelo servidor
      console.error('Erro ao fazer login:', error);
      return;
    }
  } catch (error) {
    console.error('Erro ao fazer login', error.message);
  }
});