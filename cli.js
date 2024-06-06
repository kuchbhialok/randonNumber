const btn = document.getElementById("butt");
const number = document.getElementById("num");

btn.onclick  =function(){
    randnum = Math.floor(Math.random()*100);
    number.textContent =randnum;
}
