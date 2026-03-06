// Login form handler for login.html
// NOTE: Your MongoDB connection string MUST live on the server, not here in browser JS.
// See DBConn.js or your backend code for a safe place to use it.

// Example (backend-only) connection string placeholder:
// const MONGODB_CONNECTION_STRING = "mongodb+srv://<user>:<password>@<cluster-url>/<db-name>?retryWrites=true&w=majority";
// Use this ONLY in server-side code (Node/Express, .NET, etc.), never ship real values to the browser.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('frmlogin');
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('txtEmail').value.trim();
        const password = document.getElementById('txtPassword').value;

        if (!email || !password) {
            alert('Please enter your email and password.');
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            // Frontend calls backend API, which uses MongoDB connection string server-side
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                alert(errorData.message || 'Login failed. Please check your credentials.');
                return;
            }

            const data = await response.json();

            if (data.success) {
                // Redirect after successful login; adjust target as needed
                window.location.href = 'index.html';
            } else {
                alert(data.message || 'Invalid username or password.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred while contacting the server. Please try again.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
});
