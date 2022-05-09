/* eslint-disable no-console */
/* eslint-disable no-self-compare */
const firstMassage = document.createElement('h1');
firstMassage.innerText = 'RSS Виртуальная клавиатура';
firstMassage.classList.add('greeting-massage');
document.body.appendChild(firstMassage);

const textAreaInput = document.createElement('textarea');
textAreaInput.classList.add('text-area');
textAreaInput.id = 'textarea';
textAreaInput.rows = 5;
textAreaInput.cols = 50;
textAreaInput.autofocus = true;
document.body.appendChild(textAreaInput);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
keyboardContainer.id = 'keyboard-container';
document.body.appendChild(keyboardContainer);

const row1 = document.createElement('div');
row1.classList.add('rows');
row1.id = 'row1';

const row2 = document.createElement('div');
row2.classList.add('rows');
row2.id = 'row2';

const row3 = document.createElement('div');
row3.classList.add('rows');
row3.id = 'row3';

const row4 = document.createElement('div');
row4.classList.add('rows');
row4.id = 'row4';

const row5 = document.createElement('div');
row5.classList.add('rows');
row5.id = 'row5';

keyboardContainer.append(row1, row2, row3, row4, row5);

const engKeys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'RShift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'RCtrl'],
];

const engKeysUpperCase = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'RShift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'RCtrl'],
];

// const engKeysShiftCase = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/', 'Del',
//   'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
//   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'RShift',
//   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'RCtrl'];

const cssClassMap = {
  '`': 'backquote',
  1: 'digit1',
  2: 'digit2',
  3: 'digit3',
  4: 'digit4',
  5: 'digit5',
  6: 'digit6',
  7: 'digit7',
  8: 'digit8',
  9: 'digit9',
  0: 'digit0',
  '-': 'minus',
  '=': 'equal',
  '+': 'plus',
  backspace: 'backspace',
  tab: 'tab',
  del: 'del',
  q: 'keyQ',
  w: 'keyW',
  e: 'keyE',
  r: 'keyR',
  t: 'keyT',
  y: 'keyY',
  u: 'keyU',
  i: 'keyI',
  o: 'keyO',
  p: 'keyP',
  '[': 'bracketLeft',
  ']': 'BracketRight',
  '\\': 'caseDown',
  capslock: 'capslock',
  enter: 'enter',
  a: 'keyA',
  s: 'keyS',
  d: 'keyD',
  f: 'keyF',
  g: 'keyG',
  h: 'keyH',
  j: 'keyJ',
  k: 'keyK',
  l: 'keyL',
  ';': 'Semicolon',
  "'": 'Quote',
  shift: 'shift',
  rshift: 'rshift',
  '↑': 'arrow-up',
  z: 'keyZ',
  x: 'keyX',
  c: 'keyC',
  v: 'keyV',
  b: 'keyB',
  n: 'keyN',
  m: 'keyM',
  ',': 'Comma',
  '.': 'Period',
  '/': 'caseDown',
  ctrl: 'ctrl',
  rctrl: 'rctrl',
  win: 'win',
  alt: 'alt',
  space: 'space',
  '←': 'left-arrow',
  '↓': 'down-arrow',
  '→': 'right-arrow',
};

const renderKeyboard = (keyboardKeys) => {
  for (let rowIndex = 0; rowIndex < keyboardKeys.length; rowIndex++) {
    const row = keyboardKeys[rowIndex];

    for (let keyIndex = 0; keyIndex < row.length; keyIndex++) {
      const cssClass = cssClassMap[row[keyIndex].toLowerCase()];

      const keyboardKeyElement = document.createElement('div');
      keyboardKeyElement.classList.add('key-container', `${cssClass}`);
      keyboardKeyElement.setAttribute('data-keyname', `${cssClass}`);
      keyboardKeyElement.innerText = `${row[keyIndex]}`;
      document.getElementById(`row${rowIndex + 1}`).appendChild(keyboardKeyElement);
    }
  }
};

const switchCase = (isCapsLockActive) => {
  for (let rowIndex = 0; rowIndex < keyboardContainer.children.length; rowIndex++) {
    const row = keyboardContainer.children[rowIndex].children;

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      row[colIndex].innerText = isCapsLockActive
        ? engKeysUpperCase[rowIndex][colIndex]
        : engKeys[rowIndex][colIndex];
    }
  }
};

const keyboardState = {
  capsLock: false,
};

const textArea = document.getElementById('textarea');

keyboardContainer.addEventListener('click', (e) => {
  if (e.target.dataset.keyname === 'capslock') {
    keyboardState.capsLock = !keyboardState.capsLock;
    switchCase(keyboardState.capsLock);
  }

  textArea.value += e.target.textContent;
});

renderKeyboard(engKeys);

const keys = document.querySelectorAll('.key-container');
const spaceKey = document.querySelector('.space');
const ctrlKey = document.querySelector('.ctrl');
const winKey = document.querySelector('.win');
const deleteKey = document.querySelector('.del');
const RightShiftKey = document.querySelector('.rshift');
const RightCtrlKey = document.querySelector('.rctrl');
const ArrowUpKey = document.querySelector('.arrow-up');
const ArrowDownKey = document.querySelector('.down-arrow');
const ArrowLeftKey = document.querySelector('.left-arrow');
const ArrowRightKey = document.querySelector('.right-arrow');
const tabKey = document.querySelector('.tab');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText);
}

document.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].getAttribute('keyname')
    || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }

    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }

    if (e.code === 'ControlLeft') {
      ctrlKey.classList.add('active');
    }

    if (e.code === 'MetaLeft') {
      winKey.classList.add('active');
    }

    if (e.code === 'Delete') {
      deleteKey.classList.add('active');
    }

    if (e.code === 'ShiftRight') {
      RightShiftKey.classList.add('active');
    }

    if (e.code === 'ControlRight') {
      RightCtrlKey.classList.add('active');
    }

    if (e.code === 'ArrowUp') {
      ArrowUpKey.classList.add('active');
    }

    if (e.code === 'ArrowDown') {
      ArrowDownKey.classList.add('active');
    }

    if (e.code === 'ArrowLeft') {
      ArrowLeftKey.classList.add('active');
    }

    if (e.code === 'ArrowRight') {
      ArrowRightKey.classList.add('active');
    }

    if (e.code === 'Tab') {
      tabKey.classList.add('active');
    }

    textArea.value += e.target.textContent;
  }
});

document.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].getAttribute('keyname')
    || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }

    if (e.code === 'Space') {
      spaceKey.classList.add('active');
      spaceKey.classList.remove('active');
    }

    if (e.code === 'ControlLeft') {
      ctrlKey.classList.add('active');
      ctrlKey.classList.remove('active');
    }

    if (e.code === 'MetaLeft') {
      winKey.classList.add('active');
      winKey.classList.remove('active');
    }

    if (e.code === 'Delete') {
      deleteKey.classList.add('active');
      deleteKey.classList.remove('active');
    }

    if (e.code === 'ShiftRight') {
      RightShiftKey.classList.add('active');
      RightShiftKey.classList.remove('active');
    }

    if (e.code === 'ControlRight') {
      RightCtrlKey.classList.add('active');
      RightCtrlKey.classList.remove('active');
    }

    if (e.code === 'ArrowUp') {
      ArrowUpKey.classList.add('active');
      ArrowUpKey.classList.remove('active');
    }

    if (e.code === 'ArrowDown') {
      ArrowDownKey.classList.add('active');
      ArrowDownKey.classList.remove('active');
    }

    if (e.code === 'ArrowLeft') {
      ArrowLeftKey.classList.add('active');
      ArrowLeftKey.classList.remove('active');
    }

    if (e.code === 'ArrowRight') {
      ArrowRightKey.classList.add('active');
      ArrowRightKey.classList.remove('active');
    }

    if (e.code === 'Tab') {
      tabKey.classList.add('active');
      tabKey.classList.remove('active');
    }

    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});
