async function loadUsers() {
    return (await fetch("data/users.json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];
    try {
        users = await loadUsers();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    console.log(users);
})