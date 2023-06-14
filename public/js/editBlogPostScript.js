const newBlogPostTitleInput = document.getElementById('newBlogPostTitle');
const newBlogPostTextInput = document.getElementById('newBlogPostText');
const newBlogPostSubmitButton = document.getElementById('newBlogPostSubmit');
const newBlogPostFeedbackEl = document.getElementById('newBlogPostFeedback');

const blogPostIdEl = document.getElementById('blogPostId');
const submitMethodEl = document.getElementById('submitMethod');

function getSubmitPath() {
    let res = '/api/blogPost';
    if (blogPostIdEl.value) {
        res += '/' + blogPostIdEl.value;
    }
    return res;
}

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
        const result = await fetch(getSubmitPath(), {
            method: submitMethodEl.value,
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
});

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', async () => {
    const confirmed = confirm('Are you sure you want to delete this post?  This cannot be undone!');
    if (confirmed) {
        try {
            const result = await fetch(getSubmitPath(), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
        } finally {
            location.assign('/dashboard');
        }
    }
})