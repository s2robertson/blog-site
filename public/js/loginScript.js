const exUsernameInput = document.getElementById('exUsernameInput');
const exPasswordInput = document.getElementById('exPasswordInput');
const loginFormButton = document.getElementById('loginFormButton');
const loginFormFeedback = document.getElementById('loginFormFeedback');
const newUsernameInput = document.getElementById('newUsernameInput');
const newPasswordInput = document.getElementById('newPasswordInput');
const registerFormButton = document.getElementById('registerFormButton');
const registerFormFeedback = document.getElementById('registerFormFeedback');

loginFormButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = exUsernameInput.value.trim();
    const password = exPasswordInput.value.trim();
    let errorMsg = '';
    if (!username) {
        errorMsg += 'User name cannot be empty.  ';
    }
    if (!password) {
        errorMsg += 'Password cannot be empty.';
    }
    if (errorMsg) {
        loginFormFeedback.textContent = errorMsg;
        return;
    }
    loginFormFeedback.textContent = '';

    try {
        loginFormButton.setAttribute('disabled', true);
        const result = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (result.ok) {
            location.assign('/');
        } else {
            const { msg } = await result.json();
            loginFormFeedback.textContent = msg;
        }
    } catch (err) {
        loginFormButton.textContent = 'Login failed';
    } finally {
        loginFormButton.removeAttribute('disabled');
    }
});

registerFormButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = newUsernameInput.value.trim();
    const password = newPasswordInput.value.trim();
    let errorMsg = '';
    if (!username) {
        errorMsg += 'User name cannot be empty.  ';
    }
    if (!password) {
        errorMsg += 'Password cannot be empty.';
    }
    if (errorMsg) {
        registerFormFeedback.textContent = errorMsg;
        return;
    }

    try {
        registerFormButton.setAttribute('disabled', true);
        const result = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (result.ok) {
            location.assign('/');
        } else {
            const { msg } = await result.json();
            registerFormFeedback.textContent = msg;
        }
    } catch (err) {
        registerFormFeedback.textContent = 'Registration failed';
    } finally {
        registerFormButton.removeAttribute('disabled');
    }
});