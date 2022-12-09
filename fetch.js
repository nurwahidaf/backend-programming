const getUser = async () => {
    const container = document.querySelector(".result");
    
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();

    users.forEach((user) => (container.innerHTML += `<p>${user.name}</p>`));
};

getUser();

/**
const getUser = () => {
    const container = document.querySelector(".result");
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (result) {
            return result.json();
        })
        .then(function (users) {
            users.forEach((user) => (container.innerHTML += `<p>${user.name}</p>`));
        })
        .catch(function (err) {
            console.log(err);
        });
};

getUser();
 */


// mengambil data dari suatu api