// The keys and notes variables store the piano keys
const dir = "./24-piano-keys/";
const keysObj = {
  'c-key': new Audio(dir + 'key08-C3.mp3'), 
  'd-key': new Audio(dir + 'key10.mp3'), 
  'e-key': new Audio(dir + 'key12.mp3'), 
  'f-key': new Audio(dir + 'key13.mp3'), 
  'g-key': new Audio(dir + 'key15.mp3'), 
  'a-key': new Audio(dir + 'key17.mp3'), 
  'b-key': new Audio(dir + 'key19.mp3'), 
  'high-c-key': new Audio(dir + 'key20.mp3'), 
  'c-sharp-key': new Audio(dir + 'key09.mp3'), 
  'd-sharp-key': new Audio(dir + 'key11.mp3'), 
  'f-sharp-key': new Audio(dir + 'key14.mp3'), 
  'g-sharp-key': new Audio(dir + 'key16.mp3'), 
  'a-sharp-key': new Audio(dir + 'key18.mp3')
}
const notes = [];

Object.keys(keysObj).forEach(function(key){
  notes.push(document.getElementById(key));
});

// prevent keyup bubbling on sustain and to replay on each click
resetAudio = (audioFile) => {
  audioFile.pause();
  audioFile.currentTime = 0;
}

// Write named functions that change the color of the keys below
let keyPlay = (key) => {
  const audio = keysObj[key.target.id];

  key.target.style.backgroundColor = 'lightblue';

  resetAudio(audio);
  audio.play();
}

let keyReturn = (key) => {
  const isSustained = document.querySelector("input[name='sustain']:checked");
  const audio = keysObj[key.target.id];

  key.target.style.backgroundColor = '';

  if (!isSustained) {
    resetAudio(audio);
  }
}

// if I click on the key label e.g. 'C#' instead of the area around it
checkClick = (clickSpot, eventType) => {
  const targetClass = clickSpot.target.className;

  if (targetClass === 'keynote' || targetClass === 'black-keynote') {
    const closestKey = clickSpot.target.closest('.key, .black-key');
    if (closestKey) {
      const trueKey = new MouseEvent(eventType, { bubbles: true, cancelable: true, view: window });
      closestKey.dispatchEvent(trueKey);
      return trueKey;
    }
  }

  return clickSpot;
}

let keyPress = (note) => {
  note.addEventListener('mousedown', (key) => {
    keyPlay(checkClick(key, 'mousedown'));
  });
  note.addEventListener('mouseup', (key) => {
    keyReturn(checkClick(key, 'mouseup'));
  });

  // Add event listeners for touch events (for mobile devices)
  note.addEventListener('touchstart', (key) => {
    keyPlay(checkClick(key, 'touchstart'));
  });
  note.addEventListener('touchend', (key) => {
    keyReturn(checkClick(key, 'touchend'));
  });
}

notes.forEach(keyPress);
// Write a loop that runs the array elements through the function notes.

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextTwo.hidden = true;
  nextThree.hidden = false;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  nextThree.hidden = true;
  startOver.hidden = false;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}