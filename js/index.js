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

const engKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'RShift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl',
];

const engKeysUpperCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'RShift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'RCtrl'];

const engKeysShiftCase = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'RShift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'RCtrl'];

const keyClassMap = {
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
  Backspace: 'backspace',
  Tab: 'tab',
  Del: 'del',
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
  CapsLock: 'capslock',
  Enter: 'enter',
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
  Shift: 'shift',
  RShift: 'rshift',
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
  Ctrl: 'ctrl',
  Win: 'win',
  Alt: 'alt',
  Space: 'space',
  '←': 'left-arrow',
  '↓': 'down-arrow',
  '→': 'right-arrow',
};

const initKeyboard = () => {
  for (let i = 0; i < engKeys.length; i++) {
    const cssClass = keyClassMap[engKeys[i]];

    if (i <= 13) {
      const rows1Elements = `<div class ="key-container ${cssClass}">${engKeys[i]}</div>`;
      document.getElementById('row1').innerHTML += rows1Elements;
    }

    if (i > 13 && i <= 28) {
      const rows1Elements = `<div class ="key-container ${cssClass}">${engKeys[i]}</div>`;
      document.getElementById('row2').innerHTML += rows1Elements;
    }

    if (i > 28 && i <= 41) {
      const rows1Elements = `<div class ="key-container ${cssClass}">${engKeys[i]}</div>`;
      document.getElementById('row3').innerHTML += rows1Elements;
    }

    if (i > 41 && i <= 54) {
      const rows1Elements = `<div class ="key-container ${cssClass}">${engKeys[i]}</div>`;
      document.getElementById('row4').innerHTML += rows1Elements;
    }

    if (i > 54 && i <= 66) {
      const rows1Elements = `<div class ="key-container ${cssClass}">${engKeys[i]}</div>`;
      document.getElementById('row5').innerHTML += rows1Elements;
    }
  }
};

initKeyboard();

// const keyboardKey = document.querySelectorAll('.key-container');
// // const textArea = document.querySelector('textarea');
// const tabKey = document.querySelector('tab');
// // const keyboard = document.querySelector('.keyboard-container');

// for (let i = 0; i < keyboardKey.length; i++) {
//   keyboardKey[i].setAttribute('data-keyName', keyboardKey[i].innerText);
//   keyboardKey[i].setAttribute('lowerCaseName', keyboardKey[i].innerText);
// }

// // keyboard.addEventListener('click', (e) => {
// //   // console.log(e.target.dataset);
// //   if (e.target.textContent === 'Tab') {
// //     textArea.value += '    ';
// //     return null;
// //   }

// //   if (e.target.textContent === 'Backspace') {
// //     textArea.value = textArea.value.slice(0, -1);
// //     return null;
// //   }

// //   if (e.target.textContent === 'Shift') {
// //     return null;
// //   }

// //   if (e.target.textContent === 'Ctrl') {
// //     return null;
// //   }

// //   if (e.target.textContent === 'Win') {
// //     return null;
// //   }

// //   if (e.target.textContent === 'Alt') {
// //     return null;
// //   }

// //   if (e.target.textContent === 'Space') {
// //     textArea.value += ' ';
// //     return null;
// //   }

// //   if (e.target.textContent === 'CapsLock') {
// //     return null;
// //   }

// //   if (e.target.dataset.textContent === '') {

// //   }

// //   textArea.value += e.target.textContent;
// // });

// // textArea.addEventListener('keypress', (e) => {
// //   e.preventDefault();
// //   textArea.value +=
// //   keyboardKey.classList.add('active');
// // });

// // keyboardKey.forEach((element) => {
// //   element.onclick = function (e) {
// //     keyboardKey.forEach((element) => {
// //       setTimeout(() => {
// //         element.classList.remove('active');
// //       }, 200);
// //     });
// //     this.classList.add('active');
// //     if (e.target.textContent === 'Tab') {
// //       textArea.value += '    ';
// //       return null;
// //     }

// //     if (e.target.textContent === 'Backspace') {
// //       textArea.value = textArea.value.slice(0, -1);
// //       return null;
// //     }

// //     if (e.target.textContent === 'Shift') {
// //       return null;
// //     }

// //     if (e.target.textContent === 'Ctrl') {
// //       return null;
// //     }

// //     if (e.target.textContent === 'Win') {
// //       return null;
// //     }

// //     if (e.target.textContent === 'Alt') {
// //       return null;
// //     }

// //     if (e.target.textContent === 'Space') {
// //       textArea.value += ' ';
// //       return null;
// //     }

// //     if (e.target.textContent === 'CapsLock') {
// //       return null;
// //     }

// //     textArea.value += e.target.textContent;
// //   };
// // });

// document.addEventListener('keydown', (e) => {
//   for (let i = 0; i < keyboardKey.length; i++) {
//     if (e.key === keyboardKey[i].getAttribute('keyname')
//       || e.key === keyboardKey[i].getAttribute('lowerCaseName')) {
//       keyboardKey[i].classList.add('active');
//     }

//     if (e.code === 'CapsLock') {
//       keyboardKey[i].classList.toggle('capslock-key');
//     }

//     if (e.code === 'Tab') {
//       e.preventDefault();
//       tabKey.classList.add('active');
//     }

//     // if (e.code == 'Space') {
//     //   spaceKey.classList.add('active');
//     // }

//     // if (e.code == 'ControlLeft') {
//     //   ctrlKey.classList.add('active');
//     // }

//     // if (e.code == 'MetaLeft') {
//     //   winKey.classList.add('active');
//     // }

//     // if (e.code == 'Delete') {
//     //   deleteKey.classList.add('active');
//     // }

//     // if (e.code == 'ShiftRight') {
//     //   RightShiftKey.classList.add('active');
//     // }

//     // if (e.code == 'ControlRight') {
//     //   RightCtrlKey.classList.add('active');
//     // }

//     // if (e.code == 'ArrowUp') {
//     //   ArrowUpKey.classList.add('active');
//     // }

//     // if (e.code == 'ArrowDown') {
//     //   ArrowDownKey.classList.add('active');
//     // }

//     // if (e.code == 'ArrowLeft') {
//     //   ArrowLeftKey.classList.add('active');
//     // }

//     // if (e.code == 'ArrowRight') {
//     //   ArrowRightKey.classList.add('active');
//     // }
//   }
// });

// document.addEventListener('keyup', (e) => {
//   for (let i = 0; i < keyboardKey.length; i++) {
//     if (e.key === keyboardKey[i].getAttribute('keyname')
//       || e.key === keyboardKey[i].getAttribute('lowerCaseName')) {
//       keyboardKey[i].classList.remove('active');
//       keyboardKey[i].classList.add('remove');
//     }

//     if (e.code === 'CapsLock') {
//       keyboardKey[i].classList.add('capslock-key');
//     }

//     if (e.code === 'Tab') {
//       tabKey.classList.add('active');
//       tabKey.classList.remove('active');
//     }

//     // if (e.code == 'Space') {
//     //   spaceKey.classList.add('active');
//     //   spaceKey.classList.remove('active');
//     // }

//     // if (e.code == 'ControlLeft') {
//     //   ctrlKey.classList.add('active');
//     //   ctrlKey.classList.remove('active');
//     // }

//     // if (e.code == 'MetaLeft') {
//     //   winKey.classList.add('active');
//     //   winKey.classList.remove('active');
//     // }

//     // if (e.code == 'Delete') {
//     //   deleteKey.classList.add('active');
//     //   deleteKey.classList.remove('active');
//     // }

//     // if (e.code == 'ShiftRight') {
//     //   RightShiftKey.classList.add('active');
//     //   RightShiftKey.classList.remove('active');
//     // }

//     // if (e.code == 'ControlRight') {
//     //   RightCtrlKey.classList.add('active');
//     //   RightCtrlKey.classList.remove('active');
//     // }

//     // if (e.code == 'ArrowUp') {
//     //   ArrowUpKey.classList.add('active');
//     //   ArrowUpKey.classList.remove('active');
//     // }

//     // if (e.code == 'ArrowDown') {
//     //   ArrowDownKey.classList.add('active');
//     //   ArrowDownKey.classList.remove('active');
//     // }

//     // if (e.code == 'ArrowLeft') {
//     //   ArrowLeftKey.classList.add('active');
//     //   ArrowLeftKey.classList.remove('active');
//     // }

//     // if (e.code == 'ArrowRight') {
//     //   ArrowRightKey.classList.add('active');
//     //   ArrowRightKey.classList.remove('active');
//     // }

//     setTimeout(() => {
//       keyboardKey[i].classList.remove('remove');
//     }, 200);
//   }
// });
