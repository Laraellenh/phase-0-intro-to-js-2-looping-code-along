
const thankYouNotes = ["Thank you, Lisa, for the wonderful surprise gift!", "Thank you, Kaitlin, for the wonderful surprise gift!",
"Thank you, Jan, for the wonderful surprise gift!"]

function writeCards(cards) {
    for (let i =0; i<cards.length; i++) {
        console.log(`wrote ${cards[i]} and mailed them`)
    }
    return thankYouNotes
}
writeCards(cards);


function countDown(number) {
    // the number should be an integer greater than 0
    while (number > 0 ) {
        // ivokes console log once for each number until 0
        console.log(number);
        number -= 1;
    }
    // logs each number until 0
    console.log(number);
    }
// invoke the function using the number para to enable the countdown
    countDown(number);