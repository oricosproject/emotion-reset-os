
function scrollToNext(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

let sec = 60;
const counter = setInterval(()=>{
  let el = document.getElementById("count");
  if(!el) { clearInterval(counter); return; }
  el.innerText = sec;
  sec--;
  if(sec < 0){
    clearInterval(counter);
    scrollToNext('reboot');
  }
},1000);
