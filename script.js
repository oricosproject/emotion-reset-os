function scrollToNext(id){
  const el = document.getElementById(id);
  el.scrollIntoView({behavior:'smooth'});
}

// upgrade: smoother drain countdown
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
