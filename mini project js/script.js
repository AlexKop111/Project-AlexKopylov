document.addEventListener('DOMContentLoaded', function() {
    getUsers();
});

function getUsers() {
    const endpointUrl = 'https://jsonplaceholder.typicode.com/users';
    const userListDiv = document.getElementById('userList');

    fetch(endpointUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            return response.json();
        })
        .then(function(users) {
            users.forEach(function(user) {
                const userBlock = document.createElement('div');
                userBlock.innerHTML = '<p>ID: ' + user.id + ', Name: ' + user.name + '</p>';

                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'Details';
                detailsButton.addEventListener('click', function() {
                    window.location.href = 'user-details.html?id=' + user.id;
                });

                userBlock.appendChild(detailsButton);
                userListDiv.appendChild(userBlock);
            });
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
}