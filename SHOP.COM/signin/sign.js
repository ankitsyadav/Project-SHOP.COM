document.querySelector("#createacc").addEventListener("mouseenter", entering);
function entering() {
  document.querySelector("#createacc").style.backgroundColor = "#071138";
  document.querySelector("#createacc").style.color = "white";
}
document.querySelector("#createacc").addEventListener("mouseleave", leaving);
function leaving() {
  document.querySelector("#createacc").style.backgroundColor = "white";
  document.querySelector("#createacc").style.color = "#071138";
}
document.getElementById("createacc").addEventListener("click", linkeded);
function linkeded() {
  event.preventDefault();
  window.location.href = "../createaccountpage/createacc.html ";
}
document.querySelector("#gotohome").addEventListener("click",goToHome)
var array=JSON.parse(localStorage.getItem("userDataBase"));

 function goToHome(){
  event.preventDefault();
  var email=document.querySelector("#firstid").value ;
  var password=document.querySelector("#secid").value ;
  var count=0;
  for(var i=0; i<array.length; i++)
  {
  if((email==array[i].email)&& (password==array[i].password1))
  {
    window.location.href="../1st Project/index.html";
    count++;
  }
  
 }
 if(count==0)
 {
   alert("invalid credentials");
 }
}

