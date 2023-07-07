let userName = document.getElementById("user-name");
let password = document.getElementById("password");
let paraUsername = document.getElementById("para-username");
let paraPassword = document.getElementById("para-password");
var flag = false;
function test(value) {
  let emailValue = value;
  let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
  if (!emailPattern.test(emailValue)) {
    paraUsername.style.display = "block";
    flag = false;
  } else {
    paraUsername.style.display = "none";
    flag = true;
  }
}
var flag1 = false;
function testPassword(value) {
  let pwdValue = value;
  let pwdPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!pwdPattern.test(pwdValue)) {
    paraPassword.style.display = "block";
    flag1 = false;
  } else {
    paraPassword.style.display = "none";
    flag1 = true;
  }
}

let btn = document.getElementById("submit-button");
btn.addEventListener("click", function (e) {
  if (flag && flag1) {
    console.log("valid");
  } else {
    e.preventDefault();
    console.log("not valid");
  }
});
