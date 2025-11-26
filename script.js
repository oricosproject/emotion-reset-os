function go(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

/* 감정 선택: 최대 2개 */
function selectEmotion(elem){
  const chips=[...elem.parentElement.children];
  const selected=chips.filter(x=>x.classList.contains('active'));
  const already=elem.classList.contains('active');

  if(already){
    elem.classList.remove('active');
    return;
  }
  if(selected.length<2){
    elem.classList.add('active');
  }else{
    selected[0].classList.remove('active');
    elem.classList.add('active');
  }
}

/* 모드 선택 + 테마 반영 */
function selectMode(elem,theme){
  const chips=[...elem.parentElement.children];
  chips.forEach(c=>c.classList.remove('active'));
  elem.classList.add('active');

  document.getElementById('app').className='app '+theme;

  const map={
    calm:'안정 모드로 정렬되었습니다.',
    peace:'평온 모드로 정렬되었습니다.',
    focus:'집중 모드로 정렬되었습니다.'
  };
  const modeText=document.getElementById('modeResult');
  if(modeText) modeText.innerText=map[theme]||'안정 모드로 정렬되었습니다.';
}

/* 카운트다운 */
let sec=60;
let counter=setInterval(()=>{
  const el=document.getElementById('count');
  if(!el){ clearInterval(counter); return; }
  el.innerText=sec;
  sec--;
  if(sec<0){
    clearInterval(counter);
    go('reboot');
  }
},1000);
