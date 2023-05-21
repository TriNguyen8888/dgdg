let wrapper = document.querySelector('.wrapper');
let login = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btnPopup = document.querySelector('.btnLogin-popup');
console.log(wrapper);

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add("active");
    console.log(wrapper);
});
login.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    console.log(wrapper);
});

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add("active-popup");
//     console.log(wrapper);
// });

let btnRegis = document.querySelector(".btn");
console.log(btnRegis);
let age = document.querySelector(".age");
let password = document.querySelector(".pass");
let username = document.querySelector(".username");
console.log(username);

let account = {
  username: "nguyen",
  age: 16,
  password: 1234,
};
let user = JSON.parse(localStorage.getItem("container"));
if (user == null) {
  localStorage.setItem("container", JSON.stringify(account));
}
console.log(user);
// function auth() {
//     var username = document.getElementsByClassName("username").value;
//     var password = document.getElementsByClassName("password").value;
//     var age = document.getElementsByClassName("age").value;
// }


function submit() {
    var usernameLog = document.getElementsByClassName("username").value;
    var passwordLog = document.getElementsByClassName("password").value;
    var age = document.getElementsByClassName("age").value;
  let tk = {
    username: usernameLog,
    age: age,
    password: password,
  };
  account.push(tk);
  localStorage.setItem("container", JSON.stringify(tk));
  window.location.replace("./show.html");
  console.log(tk);
}

function submition() {
    var usernameLog = document.getElementsByClassName("username").value;
    var passwordLog = document.getElementsByClassName("password").value;
    console.log(username.value);
    console.log(username.value.trim());
    
    let tk = {
        username: usernameLog,
        pass: passwordLog,
    };
    if (usernameLog.trim().length == usernameLog){
        alert('username cant have space');
    } else if (passwordLog.trim().length == passwordLog) {
        alert('passwprd cant have space');
    } else if (username.value.trim().length == 0 ||
    passwordLog.trim().length == 0)
    {alert("check input");
 } else {
    if (password.value.trim().length == password.value) {
        alert("check password");
    } else {
        let check = false;
        for (let i = 0; i < user.length; i++) {
            if (user[i].username == usernameLog.trim()) {
                check = true;
            }
        }
        if (check = true) {
            console.log("tk bi trung");
        } else {
            console.log("dk thanh cong");
            user.push(tk);
            localStorage.setItem("container", JSON.stringify)
        }
    }
 }
}

