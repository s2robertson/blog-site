const newBlogPostTitleInput = document.getElementById('newBlogPostTitle');
const newBlogPostTextInput = document.getElementById('newBlogPostText');
const newBlogPostSubmitButton = document.getElementById('newBlogPostSubmit');
const newBlogPostFeedbackEl = document.getElementById('newBlogPostFeedback');

newBlogPostSubmitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = newBlogPostTitleInput.value.trim();
    const text = newBlogPostTextInput.value.trim();
    let errorMsg = '';
    if (!title) {
        errorMsg += 'Title cannot be empty.  ';
    }
    if (!text) {
        errorMsg += 'Main content cannot be empty.';
    }
    if (errorMsg) {
        newBlogPostFeedbackEl.textContent = errorMsg;
        return;
    }
    newBlogPostFeedbackEl.textContent = '';

    try {
        newBlogPostSubmitButton.setAttribute('disabled', true);
        const result = await fetch('/api/blogPost', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (result.ok) {
            location.assign('/dashboard');
        } else {
            const { msg } = await result.json();
            newBlogPostFeedbackEl.textContent = msg;
        }
    } catch (err) {
        newBlogPostFeedbackEl.textContent = 'Saving blog post failed';
    } finally {
        newBlogPostSubmitButton.removeAttribute('disabled');
    }
})