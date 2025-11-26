function scrollToNext(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({behavior:'smooth'});
}

// 감정 선택 칩
function selectEmotion(elem) {
  const group = elem.parentElement;
  [...group.children].forEach(chip => chip.classList.remove('active'));
  elem.classList.add('active');
}

// 모드 선택 칩 + 결과 텍스트 반영
let selectedMode = '안정';

function selectMode(elem, modeLabel) {
  selectedMode = modeLabel || '안정';
  const group = elem.parentElement;
  [...group.children].forEach(chip => chip.classList.remove('active'));
  elem.classList.add('active');

  const result = document.getElementById('modeResult');
  if (result) {
    result.textContent = `지금 이 순간, 당신의 내면은 “${selectedMode} 모드”로 정렬되었습니다.`;
  }
}

// 감정 해소 카운트다운
let sec = 60;
const counter = setInterval(()=>{
  const el = document.getElementById("count");
  if(!el) { clearInterval(counter); return; }
  el.innerText = sec;
  sec--;
  if(sec < 0){
    clearInterval(counter);
    scrollToNext('reboot');
  }
},1000);

