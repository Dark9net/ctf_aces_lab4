document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Call a function to verify the credentials
    if (verifyCredentials(username, password)) {
      alert('Login successful! Redirecting to dopes.html.'); // Temporary alert for demonstration purposes
      window.location.href = 'dopes.html'; // Redirect to dopes.html after successful login
    } else {
      alert('Invalid username or password.'); // Replace this with your desired action upon unsuccessful login
    }
  });

  function verifyCredentials(username, password) {
    return username === 'Rajan_mahato' && password === '9762511114';
  }
});
