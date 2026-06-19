let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

function login(){

let u = document.getElementById("user").value;
let p = document.getElementById("pass").value;

// ❗ qiyin login prank
if(u.length < 3){
msg.innerText = "Username too short ❌";
return;
}

if(p.length < 4){
msg.innerText = "Password too weak ❌";
return;
}

// loading stage
document.getElementById("login").style.display = "none";
document.getElementById("loading").style.display = "block";

setTimeout(()=>{
document.getElementById("loading").style.display = "none";
document.getElementById("prank").style.display = "block";

// sound
let sound = document.getElementById("sound");
sound.play();

},3000);

}