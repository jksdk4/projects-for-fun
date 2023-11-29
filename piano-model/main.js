// The keys and notes variables store the piano keys
const dir = "./24-piano-keys/";
const keysObj = {
  'f2-key': new Audio(dir + 'key01-F2.mp3'),
  'f2-sharp-key': new Audio(dir + 'key02-Fsharp.mp3'),
  'g2-key': new Audio(dir + 'key03-G.mp3'),
  'g2-sharp-key': new Audio(dir + 'key04-Gsharp.mp3'),
  'a2-key': new Audio(dir + 'key05-A.mp3'),
  'a2-sharp-key': new Audio(dir + 'key06-Asharp.mp3'),
  'b2-key': new Audio(dir + 'key07-B.mp3'),
  'middle-c-key': new Audio(dir + 'key08-C3.mp3'),
  'c3-sharp-key': new Audio(dir + 'key09.mp3'),
  'd3-key': new Audio(dir + 'key10.mp3'), 
  'd3-sharp-key': new Audio(dir + 'key11.mp3'),
  'e3-key': new Audio(dir + 'key12.mp3'), 
  'f3-key': new Audio(dir + 'key13.mp3'), 
  'f3-sharp-key': new Audio(dir + 'key14.mp3'),
  'g3-key': new Audio(dir + 'key15.mp3'), 
  'g3-sharp-key': new Audio(dir + 'key16.mp3'),
  'a3-key': new Audio(dir + 'key17.mp3'), 
  'a3-sharp-key': new Audio(dir + 'key18.mp3'),
  'b3-key': new Audio(dir + 'key19.mp3'), 
  'c4-key': new Audio(dir + 'key20.mp3'), 
  'c4-sharp-key': new Audio(dir + 'key21.mp3'),
  'd4-key': new Audio(dir + 'key22.mp3'),
  'd4-sharp-key': new Audio(dir + 'key23.mp3'),
  'e4-key': new Audio(dir + 'key24.mp3'),
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