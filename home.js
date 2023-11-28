document.getElementById("welcome").innerHTML = `Welcome ${localStorage.getItem(
  "NAME"
)}`;
// let amt=0
let balance = 0;
function depo() {
  if (
    document.getElementById("psw3").value == localStorage.getItem("PASSWORD")
  ) {
    let amt = Math.floor(depoamt.value);
    balance += amt;
    document.getElementById(
      "resu"
    ).innerHTML = `<h1 style="font-size: 50px;">YOUR TRANSACTION IS COMPLETED FINAL BALANCE IS ${balance}
    </h1>`;
  } else {
    document.getElementById(
      "resu"
    ).innerHTML = `<h1 style="font-size: 50px;">OOPS SOMETHING WENT WRONG PLEASE CHECK YOUR PASSWORD
    </h1>`;
  }
}

function widraw() {
  if (
    document.getElementById("psw4").value == localStorage.getItem("PASSWORD")
  ) {
    let wamt = Math.floor(wid.value);
    balance -= wamt;
    document.getElementById(
      "resu"
    ).innerHTML = `<h1 style="font-size: 50px;">YOUR TRANSACTION IS COMPLETED FINAL BALANCE IS ${balance}
    </h1>`;
  } else {
    document.getElementById(
      "resu"
    ).innerHTML = `<h1 style="font-size: 50px;">OOPS SOMETHING WENT WRONG PLEASE CHECK YOUR PASSWORD
    </h1>`;
  }
}

function logout() {
  window.location = "./index.html";
}
