const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let Arr =  expr.split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < 10) ? s[l] += c : s.push(c); return s;}, []);
    let arrGeneral = [];
    let strEnd = '';
  for (let i= 0; i < Arr.length; i++) {
    arrGeneral.push(Arr[i].split("00").join("").split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < 2) ? s[l] += c : s.push(c); return s;}, []));
  }
  for(let i = 0; i < arrGeneral.length; i++) {
      
    for (let j = 0; j < arrGeneral[i].length; j++) {
        if (arrGeneral[i][j] == 10) {
            arrGeneral[i][j] = '.'; }
        else if (arrGeneral[i][j] == 11) {
            arrGeneral[i][j] = '-'; }
        else if (arrGeneral[i][j] == '**') {
            arrGeneral[i][j] = ' '; }   
}
  }
  for (let i = 0; i < arrGeneral.length; i++) {
    arrGeneral[i] = arrGeneral[i].join('')
  }
  for (let i = 0; i < arrGeneral.length; i++) {
      for (let key in MORSE_TABLE) {
          if (arrGeneral[i] == key ) {
            strEnd += MORSE_TABLE[key]
          } 
      } if (arrGeneral[i] == '     ') {
        strEnd += ' ';
    }
      
  } return strEnd
}

module.exports = {
    decode
}