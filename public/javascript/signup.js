
async function loginFormHandler(event) {
    event.preventDefault();
    const password = document.querySelector("#password-login").value.trim();

    if (password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                password
              }),
              headers: { 'Content-Type': 'application/json' }
            });
        
            if (response.ok) {
              document.location.replace('/dashboard');
            } else {
              alert(response.statusText);
            }
          }
        }
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);