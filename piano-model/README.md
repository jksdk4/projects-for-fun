# Hello!

I stole this idea from Codecademy. I wanted the piano to be slightly more interesting.

## Nov 29, 2023:
- Added audio files to match with notes.
- Updated the key array to an object that maps to the audio files.
- Refactored the `keyPress` variable to have event listeners.
    - Within this, updated the `keyPlay` and `keyReturn` functions to check for click location and update the mouse event target if needed; this allows clicking all over the key instead of it breaking on the label
- Added `checkClick` that updates the target and creates a new mouse event to pass in to the key event listeners if the label is clicked instead of the area.
- Updated `keyPlay` and `keyReturn` to play audio correctly by resetting on each fire, preventing a replay if the key is long pressed on sustain mode.
- Added a check to toggle a sustained effect to the piano.
- Added functionality for mobile devices, haven't tested it yet, ChatGPT told me to put in there and I must obey.

### Future ideas:
1. Maybe use 2 octaves. Or just all of the audio files. That might be too cramped though.
2. Make a switch to change songs.
3. Make a switch to change what key the song is in (probably some math for step progression)
4. Make a controller to make the piano play a song by itself. (maybe an adjustable metronome to the user)
5. If I can make the song play by itself, maybe I can make the lyrics move with it.
6. Make some modules and tests perhaps
