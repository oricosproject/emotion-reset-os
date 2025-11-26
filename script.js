// 모드 선택 칩 + 결과 텍스트 + 테마 반영
let selectedMode = '안정';

function selectMode(elem, modeLabel) {
  selectedMode = modeLabel || '안정';

  // 1) 칩 active 처리
  const group = elem.parentElement;
  [...group.children].forEach(chip => chip.classList.remove('active'));
  elem.classList.add('active');

  // 2) 결과 문구 반영
  const result = document.getElementById('modeResult');
  if (result) {
    result.textContent =
      `지금 이 순간, 당신의 내면은 “${selectedMode} 모드”로 정렬되었습니다.`;
  }

  // 3) 테마 클래스 반영
  const appShell = document.querySelector('.app-shell');
  if (appShell) {
    appShell.classList.remove('theme-calm', 'theme-peace', 'theme-focus');

    if (selectedMode === '안정') {
      appShell.classList.add('theme-calm');
    } else if (selectedMode === '평온') {
      appShell.classList.add('theme-peace');
    } else if (selectedMode === '집중') {
      appShell.classList.add('theme-focus');
    }
  }
}

