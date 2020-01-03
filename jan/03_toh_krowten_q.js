function gethotNextworkQuestionTexts() {
    let hotNextworkQuestionTexts = [] // new Array()

    $(".question-hyperlink").each(function(index, questionHyperlink){
        if($(questionHyperlink).hasClass("mb0"))
            hotNextworkQuestionTexts.push($(questionHyperlink).text())
    })

    // Removal of \n & spaces around
    //
    // [
    // "\n                    Significant pay cut in new job not justified in retrospect - next steps?\n                ",
    // ...
    // ...
    // ]
    return hotNextworkQuestionTexts.map((questionText) => questionText.trim())
}

console.log(JSON.stringify(gethotNextworkQuestionTexts(), null, 4))

/*
[
    "Significant pay cut in new job not justified in retrospect - next steps?",
    "Make 28 with the numbers 2020",
    "How do I tactfully stop a competitor from copying and spying our business?",
    "How did forests end up covering pyramids?",
    "How do totalitarian governments communicate fear while also sending the message that they are the best governments?",
    "Predicting the effects of psychotropic drugs",
    "Is this scenario an exception to the rule of never storing passwords in plaintext?",
    "Hospital vs. Clinic vs. Polyclinic etc",
    "Can a browser extension (Chrome, Firefox, etc.) read the web console log?",
    "Does the Maztican goddess of love, Kiltzi, support homosexuality?",
    "Congressman Jeff Van Drew is switching parties over Trump impeachment: has this ever happened before?",
    "How to prevent a controller rendering to load for a specific condition programmatically",
    "Why wasn't an army of Force-sensitive beings created?",
    "What prevents a commercial jet from electronically \"resetting\" the way a computer sometimes does?",
    "get string from cursor to end of <CWORD>",
    "Who was this Roman General/figure of authority who, on his deathbed, named these two regrets?",
    "verb describing \"stomach's singing\"",
    "A star or a galaxy?",
    "How can my daughter turn her horse into a unicorn?",
    "Work requiring employees install MDM on their phones",
    "What is the purpose of democracy?",
    "How to get a green gas giant?",
    "Is there some resource of non-tactical positions to practice analysing?",
    "Who was General Qasem Soleimani, and why was he targeted by the US?"
]
*/