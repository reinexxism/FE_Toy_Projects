const loginBtn = document.querySelector(".login_btn");

loginBtn.addEventListener("click", () => {
  let userName = document.querySelector(".user_name_input").value;
  let password = document.querySelector(".user_password_input").value;
  if (userName !== "reinexxism") {
    alert("귀여운 현이가 아닙니다!");
    return;
  }
  if (password !== "220410") {
    alert("귀여운 현이를 사칭하는 사람입니다!");
    return;
  }
  alert("현이야 사랑해!");
});
