const userName = "Roxy";
if (userName) {
    console.log(`Hello, ${userName}!`)
} else {
    console.log("Hello!")
}

let userQuestion = "will I get a coding job by September?";
if (userQuestion) {
    console.log(`${userName} wonders ${userQuestion}`)
}

let randomNumber = Math.floor(Math.random() * 8);


let eightBall = "";

if (randomNumber === 0) {
    eightBall= 'You go, Glen Coco!';
} else if (randomNumber === 1) {
    eightBall = `Well, ${userName}, it is decidely so.`;
} else if (randomNumber === 2) {
    eightBall = "Reply hazy, let me grab my glasses. Try again in a minute.";
} else if (randomNumber === 3) {
    eightBall = `Oops, come back later, ${userName}!`;
} else if (randomNumber === 4) {
    eightBall = "Ya, don't count on it.";
} else if (randomNumber === 5) {
    eightBall = `Sorry, ${userName}, but my sources say no.`;
} else if (randomNumber === 6) {
    eightBall = "WOMP WOMP. Outlook not so good.";
} else if (randomNumber === 7) {
    eightBall = `Oooooo see that sign over there? It's pointing to YES, ${userName}!`;
}

console.log(`Your answer is ${eightBall}`);
