let userName = "Roxy";
if (userName) {
    console.log(`Hello, ${userName}!`)
} else {
    console.log("Hello!")
}

let userQuestion = "";
if (userQuestion) {
    console.log(`${userName} wonders ${userQuestion}`)
}

let randomNumber = Math.floor(Math.random() * 8);


let eightBall = "";
if (randomNumber === 0) {
    console.log('You go, Glen Coco!')
} else if (randomNumber === 1) {
    console.log(`Well, ${userName}, it is decidely so.`)
} else if (randomNumber === 2) {
    console.log("Reply hazy, let me grab my glasses. Try again in a minute.")
} else if (randomNumber === 3) {
    console.log(`Oops, come back later, ${userName}!`)
} else if (randomNumber === 4) {
    console.log("Ya, don't count on it.")
} else if (randomNumber === 5) {
    console.log(`Sorry, ${userName}, but my sources say no.`)
} else if (randomNumber === 6) {
    console.log("WOMP WOMP. Outlook not so good.")
} else if (randomNumber === 7) {
    console.log(`Oooooo see that sign over there? It's pointing to YES, ${userName}!`)
}
