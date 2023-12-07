// JavaScript Documentconst myHeading = document.querySelector("h1");
console.log("hello World");
console.log(new Date().getFullYear());
document.getElementById('footer').innerHTML=("Solar psychic services©")+(new Date().getFullYear())
function myFunction() {
  alert("sorry, unable to connect with the dead");}
var clicks = 0;
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;}
if (("clicks")% 2 ==0 ) {
  console.log("even");
} else {
  console.log("uneven");
}