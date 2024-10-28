function login()
{
let username=document.getElementById("user").value;
let passworde=document.getElementById("pass").value;
let abhiram1="abhirams";
let abhiram2="9946557321";
let anand1="anands";
let anand2="8891557321";
if(username == abhiram1 && passworde == abhiram2)
{
window.location="demo.html"
}
else if(username == anand1 && passworde == anand2)
{
	window.location="anand.html"
}
else
{
alert("incorrect username or password")
}
}