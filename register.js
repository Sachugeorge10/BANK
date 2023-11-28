function register() {
  let uname = document.getElementById("username").value;
  let accountnum = document.getElementById("accnum").value;
  let pasword = document.getElementById("psw").value;

  localStorage.setItem("NAME", uname);
  localStorage.setItem("ACCOUNT NUMBER", accountnum);
  localStorage.setItem("PASSWORD", pasword);
  alert("your data entered sucessfully");
  window.location='./front.html'
}
