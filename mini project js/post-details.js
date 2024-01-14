document.addEventListener('DOMContentLoaded', function() {
    getPostDetails();
    getPostComments();
});

function getPostDetails() {
    const postId = new URLSearchParams(window.location.search).get('id');
    const endpointUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const postDetailsDiv = document.getElementById('postDetails');
    fetch(endpointUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(postDetails) {
            postDetailsDiv.innerHTML = `<p>ID: ${postDetails.id}</p>
        <p>Title: ${postDetails.title}</p>
        <p>Body: ${postDetails.body}</p>`;
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
}

function getPostComments() {
    const postId = new URLSearchParams(window.location.search).get('id');
    const endpointUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const postCommentsDiv = document.getElementById('postComments');
    fetch(endpointUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(comments) {
            postCommentsDiv.innerHTML = '';
            comments.forEach(function(comment) {
                const commentBlock = document.createElement('div');
                commentBlock.innerHTML = `<p>Name: ${comment.name}</p>
                                    <p>Email: ${comment.email}</p>
                                    <p>Body: ${comment.body}</p>`;
                postCommentsDiv.appendChild(commentBlock);
            });
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
}