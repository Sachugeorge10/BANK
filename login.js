// function login()
// {
//     let pass=document.getElementById("pasw2").value
//     console.log(pass);
//     let acc=document.getElementById("accnum2").value

//     if(pass===localStorage.getItem('pasword')&&(acc===localStorage.getItem('accountnum')))
//     {
//         window.location='./home.html'
//         let welname=localStorage.getItem("NAME")
//         document.getElementById("welcome").innerHTML=`WLCOME ${welname  }`
//     }
//     else
//     {
//        document.getElementById("result")=innerHTML="error"
//     }

// }
function check() {
  let loginpass = document.getElementById("psw2").value;
  let loginacnum = document.getElementById("accnum2").value;

  if (
    loginacnum == localStorage.getItem("ACCOUNT NUMBER") &&
    loginpass == localStorage.getItem("PASSWORD")
  ) {
    window.location = "./home.html";
  } else {
    
    document.getElementById("result").innerHTML = `<div style="font-size: 30px; " class="text-bg-light text-danger">
    OOPS SORRY SOME ERROR Found
  </div>;`;
  }
}
