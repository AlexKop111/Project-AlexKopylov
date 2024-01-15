document.addEventListener('DOMContentLoaded', function() {
    getUserDetails();
    document.getElementById('postsButton').addEventListener('click', getUserPosts);
});

function getUserDetails() {
    const userId = new URLSearchParams(window.location.search).get('id');
    const endpointUrl = 'https://jsonplaceholder.typicode.com/users/' + userId;
    const userDetailsDiv = document.getElementById('userDetails');

    fetch(endpointUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            return response.json();
        })
        .then(function(userDetails) {
            userDetailsDiv.innerHTML = '<p>ID: ' + userDetails.id + ', Name: ' + userDetails.name + '</p>' +
                '<p>Email: ' + userDetails.email + '</p>' +
                '<p>Phone: ' + userDetails.phone + '</p>' +
                '<p>Website: ' + userDetails.website + '</p>';
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
}

function getUserPosts() {
    const userId = new URLSearchParams(window.location.search).get('id');
    const endpointUrl = 'https://jsonplaceholder.typicode.com/users/' + userId + '/posts';
    const userPostsDiv = document.getElementById('userPosts');
    fetch(endpointUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            return response.json();
        })
        .then(function(posts) {
            userPostsDiv.innerHTML = '';
            posts.forEach(function(post) {
                const postBlock = document.createElement('div');
                postBlock.innerHTML = '<p>Title: ' + post.title + '</p>';

                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'Post Details';
                detailsButton.addEventListener('click', function() {
                    window.location.href = 'post-details.html?id=' + post.id;
                });

                postBlock.appendChild(detailsButton);
                userPostsDiv.appendChild(postBlock);
            });
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
}