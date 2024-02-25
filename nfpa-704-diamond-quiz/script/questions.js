// flammability: what makes you angry and/or upset? are you always big mad? are you physically sweaty?
const redQuestions = [
    {
        "question": "Want to fight?",
        // use k/v for scoring and to populate radio selection fields
        "answers": [
            {0: "\"gosh no!\""}, 
            {2: "\"I guess if you want\""}, 
            {3: "\"HE'll Ye'S ! !\""},
            {4: "you seem to constantly have your hand on your firearm"}, 
            {1: "\"can i call my wife first\""}
        ]
    },
];

// health: what do you do when you're ill? how do you take care of yourself? how is your diet?
const blueQuestions = ["Trenta frap or small Americano?", "Cry a lot?"];

// instability/reactivity: how do you react in certain situations? are you crazy? do you have The Depress?
const yellowQuestions = [
    {
        "question": "Let's say you're driving and you're doing everything right, but another driver is raging at you \
        due to their carelessness. What you do?",
        "answers": [
            {0: "you think 'well that's just too bad but i am right'"},
            {1: "you imagine murdering them but don't actually do it"},
            {2: "you aggressively tailgate them for a few miles, or otherwise prevent them from passing you"},
            {3: "you roll down you window, insult them, and possibly offer hand gestures"},
            {4: "you chase them to their destination, insult them, then speed away before they call the cops or locate \
            their firearm"}
        ]
    }
];

/*  
    special notice: maybe these can be segmented into types and then if they reach a threshhold then they would
    appear based on the highest value of the scores across each subtype

    so: maybe answer's key is type, then when scoring add up the times it was selected, then if it exceeds perhaps 3
    selections then it can be considered appearing as a value

    but... special questions for these, or intersperse them with other colored questions? both? hmm
*/
const whiteQuestions = [];