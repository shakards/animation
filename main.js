// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const message = document.getElementById('message');
    
//     if (username === 'user' && password === 'pass') {
//         message.textContent = 'Login successful!';
//         message.style.color = 'green';
//     } else {
//         message.textContent = 'Wrong username or password.';
//         message.style.color = 'red';
//     }
// });


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Example validation logic
    if (email === 'user@example.com' && password === 'password123') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Wrong email or password.';
        message.style.color = 'red';
    }
});

// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
