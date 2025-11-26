// 감정 선택 (최대 2개)
function selectEmotion(elem) {
  // 이미 선택된 칩인지 확인
  const already = elem.classList.contains('active');

  // 감정 칩 전체
  const chips = [...elem.parentElement.children];

  // 현재 선택된 칩 목록
  const selected = chips.filter(ch => ch.classList.contains('active'));

  // 이미 active → 클릭하면 해제
  if (already) {
    elem.classList.remove('active');
    return;
  }

  // active가 2개 미만이면 새로 추가
  if (selected.length < 2) {
    elem.classList.add('active');
  } 
  else {
    // 3개째를 누르면 가장 먼저 선택한 칩 해제 후 새 칩 활성화
    selected[0].classList.remove('active');
    elem.classList.add('active');
  }
}
