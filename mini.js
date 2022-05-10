// Api url
const url = "https://jsonplaceholder.typicode.com/users";

//Fetch users function
function fetchUsers(){
    //fetch API from the browser
    fetch(url)
    .then((response)=>response.json())
    .then((data) =>{
        // passing user data from the renderUser
        renderUsers(data)
    });
}
//render usersdata function
function renderUsers(usersData) {
    //console.log(usersData)
    const ul = document.getElementById("user-list-container");
    //console.log(ul);


    // render li forEach of the users
    usersData.forEach((user, index) => {
        //console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        //apend li tag
        ul.appendChild(li);
    });
}

// search functionality
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();

    const usersList = ul.querySelectorAll("li");

    //loop through the usrs and render the one that match
    for(let i=0; i<usersList.length; i++){
        const userNameSpanTag = usersList[i].querySelector(".username");
        const usernameSpanTagValue = userNameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
       // console.log(usernameSpanTagValue.indexOf(inputValue) > -1);
        
        if (isMatch) {
            usersList[i].style.display = "block";
        } else{
            usersList[i].style.display = "none";
        }
    }
}

fetchUsers();

