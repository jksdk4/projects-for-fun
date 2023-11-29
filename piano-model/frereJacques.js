const stanzas = [
    group1 = {
        "FRE-": 'F',
        "RE": 'G',
        "JAC-": 'A',
        "QUES": 'F',
    },
    group2 = {
        "DORM-": 'A',
        "EZ": 'A#',
        "VOUS?": 'C',
    },
    group3 = {
        "SON-": 'C',
        "NEZ": 'D',
        "LES": 'C',
        "MA-": 'A#',
        "TI-": 'A',
        "NES!": 'F',
    },
    group4 = {
        "DIN": 'F',
        "DAN": 'C',
        "DON": 'F',
    }
]

const lyricSection = document.getElementById('lyrics');

let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

lyricSection.innerHTML = `
    <section id='column-one'>
        <section id="word-one">FRE-</section>
        <section id="letter-note-one">F</section>
    </section>
    <section id='column-two'>
        <section id="word-two">RE</section>
        <section id="letter-note-two">G</section>
    </section>
    <section id='column-three'>
        <section id="word-three">JAC-</section>
        <section id="letter-note-three">A</section>
    </section>
    <section id='column-four'>
        <section id="word-four">QUES</section>
        <section id="letter-note-four">F</section>
    </section>

    <button id="first-next-line">Line 2</button>
    <button id="second-next-line">Line 3</button>
    <button id="third-next-line">Line 4</button>
    <button id="fourth-next-line">Reset</button>
`;
