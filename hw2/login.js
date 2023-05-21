let username = document.querySelector('.username')
let logPass = document.querySelector('.password')
let btnLogin = document.querySelector('.btn')
console.log(username);
let arrAccount = JSON.parse(localStorage.getItem("container"))
console.log(arrAccount);

btnLogin.addEventListener("click",()=> {
    for(let i=0; i < arrAccount.length; i++) {
        if(arrAccount[i].username == username.value && arrAccount[i].password == logPass.value) {
            window.location.href = "./home.html";
            console.log("123");
        }
    }
})