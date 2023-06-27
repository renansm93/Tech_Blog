async function loginFormHandler(event) {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {

           // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert('Login failed');
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);