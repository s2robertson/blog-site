const commentsList = document.getElementById('commentsList');
const newCommentTextarea = document.getElementById('newCommentTextarea');
const newCommentButton = document.getElementById('newCommentButton');
const newCommentFeedback = document.getElementById('newCommentFeedback');
const usernameInput = document.getElementById('usernameInput');

function buildCommentListItem(comment) {
    const base = document.createElement('li');
    base.classList.add('list-group-item')
    const title = document.createElement('h3');
    title.classList.add('fs-5');
    const createdAt = comment.createdAt ? new Date(comment.createdAt) : new Date();
    title.textContent = `#${commentsList.children.length}. By ${usernameInput.value} on ${createdAt.toLocaleString()}`;
    const text = document.createElement('p');
    text.textContent = comment.text;

    base.append(title, text);
    commentsList.append(base);
}

newCommentButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = newCommentTextarea.value.trim();
    if (!text) {
        newCommentFeedback.textContent = 'Comment cannot be empty.';
        return;
    }
    newCommentFeedback.textContent = '';

    try {
        const blogPostId = location.pathname.split('/').at(-1);
        newCommentButton.setAttribute('disabled', true);
        const fetchResult = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ blogPostId, text }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!fetchResult.ok) {
            newCommentFeedback.textContent = 'Saving comment failed';
        } else {
            const comment = await fetchResult.json();
            buildCommentListItem(comment);
        }
    } catch (err) {
        newCommentFeedback.textContent = 'Saving comment failed';
    } finally {
        newCommentButton.removeAttribute('disabled');
    }
})