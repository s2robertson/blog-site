const logOutButton = document.getElementById('logOutButton');
const logInButton = document.getElementById('logInButton');

logOutButton.addEventListener('click', async () => {
    const result = await fetch('/api/user/logout', {
        method: 'POST',
        body: '',
        headers: { 'Content-Type': 'application/json' }
    });
    if (result.ok) {
        logOutButton.style.display = 'none';
        logInButton.style.display = 'block';
        if (location.pathname == '/dashboard') {
            location.assign('/');
        } else {
            location.reload();
        }
    }
})