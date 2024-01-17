function validateCredentials(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  if (username === 'user' && password === 'password') {
    alert('Logged in successfully!');
    window.location.href = 'dopes.html';
  } else {
    errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
}
