/////////////Variables and DOM elements/////////////////
let flipped = [];
let score = 0;
let counter = 0;
const counterDisplay = $('header p');
const startButton = $('button');
let cards = $('.card');

//////////////Functions////////////////////

//Randomize Cards
let randomizer = (array) => {
    return array.sort((a,b) => 0.5 - Math.random());
}

//Sets Cards randomly by calling randomizer() and assigns colors to cards
let cardSetter = () => {
    cards = randomizer(cards);
    $.each(cards, function (index) {
        switch (index) {
            case 0:
            case 1:
                $(this).addClass('red');
                break;

            case 2:
            case 3:
                $(this).addClass('blue');
                break;

            case 4:
            case 5:
                $(this).addClass('green');
                break;

            case 6:
            case 7:
                $(this).addClass('yellow');
                break;

            case 8:
            case 9:
                $(this).addClass('white');
                break;

            case 10:
            case 11:
                $(this).addClass('black');
                break;

            case 12:
            case 13:
                $(this).addClass('brown');
                break;

            case 14:
            case 15:
                $(this).addClass('grey');
                break;

        }
    })
}

//When game starts, resets variables and invokes card setter, invoked on page loading and on start Button
let gameStart = () => {
    score = 0;
    counter = 0;
    flipped = [];
    cards.off('click')
    $('main').children().css('display', 'flex');
    $('main').children().removeClass('flipped blue green red yellow white black grey brown');
    counterDisplay.text(`Coups: 0`)
    $('#end').css('display','none')
    cardSetter();
    cards.click(checkCards);
}

//When game ends, displays final counter to user, invoked when all cards are found
function gameOver() {
    $('#end').css('display', 'flex');
    $('#end').text(`Partie terminée en ${counter} coups`);
}

//Cheat
document.body.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        gameOver();
    } else if (event.code === "Space") {
        gameStart();
    }
})

//Invoked on card clicked, displays the color and checks if both flipped card are the same color
function checkCards() {
    $(this).addClass('flipped');
    $(this).off('click');
    flipped.push($(this));
    counter++;
    counterDisplay.text(`Coups: ${counter}`)

    if (flipped.length < 2) {
    }
    else {
        cards.off('click');
        if (flipped[0].attr('class') !== flipped[1].attr('class')) {
            setTimeout(() => {
                flipped[0].removeClass('flipped');
                flipped[1].removeClass('flipped');
                flipped.splice(0,2);
                cards.click(checkCards)
            }, 1000)
        } else {
            cards.click(checkCards);
            flipped[0].off('click');
            flipped[1].off('click');
            flipped.splice(0,2);
            score++;

            if (score >= 8) {
                gameOver();
            }
        }
    }

}

gameStart();

//Event listener on play button clicked
startButton.click(function (){
    gameStart();
})