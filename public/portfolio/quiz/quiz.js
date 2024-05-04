//////////////////////////////////////////////////DOM///////////////////////////////////////////////////////////////////
//Play Button
const startButton = $('#startButton');

//4 possible answers
const answer1 = $('#answer1');
const answer2 = $('#answer2');
const answer3 = $('#answer3');
const answer4 = $('#answer4');
const allAnswers = $('.answer');

//Picture
const image = $('img');

//Score from DOM
const scoreDisplay = $('#scoreNum');

//Counter from DOM
const counterDisplay = $('#counterNum');

//History List
const historyList = $('#historyList');
//History Button (mobile only)
const historyButton = $('#historyButton');

//////////////////////////////////////////////////////Variables/////////////////////////////////////////////////////////
//Score variable
let score = 0;

//Counter variable
let counter = 0;

//History color variable
let historyColor;

//////////////////////////////////////////////////Functions/////////////////////////////////////////////////////////////
/**
 *
 * @param max
 * @returns {number} random number between 0 and max
 */
let randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 *
 * @param array
 * @param number
 * @returns {*[]} array consisting of number entries from array in parameter
 */
let randomArray = (array, number) => {
    let generatedArray = [];
    for (let i = 0; i < number; i++) {
        generatedArray.push(array[randomNumber(array.length)]);
    }
    return generatedArray;
}


//Object containing the right answer and the 4 possibilities
function Questions() {
    this.q1 = "";
    this.q2 = "";
    this.q3 = "";
    this.q4 = "";

    this.a = "";
}


$.getJSON({
//Ajax Request
    url: "https://flagcdn.com/fr/codes.json",
})
    .done(function (response) {
        //If request sucessful
        let keys = Object.keys(response);
        //Prototype: generates 4 random answers and choosing one to be the good one
        Questions.prototype.setQuestions = function () {
            let questions = randomArray(keys, 4);
            this.q1 = response[questions[0]];
            this.q2 = response[questions[1]];
            this.q3 = response[questions[2]];
            this.q4 = response[questions[3]];

            this.a = questions[randomNumber(questions.length)];
            //Checks for duplicates
            if (this.q1 === this.q2 || this.q1 === this.q3 || this.q1 === this.q4
                || this.q2 === this.q3 || this.q2 === this.q4
                || this.q3 === this.q4) {
                this.setQuestions()
            }
        }

        //invokes object, will be modified with new questions on every answer
        const game = new Questions();


        function newGame() {
            //invoked when new game starts or possibility clicked
            game.setQuestions();
            //puts 4 possibilities in buttons
            answer1.text(game.q1);
            answer2.text(game.q2);
            answer3.text(game.q3);
            answer4.text(game.q4);

            //sets the image src
            image.attr('src', `https://flagcdn.com/${game.a}.svg`);
            //removes previous event listeners
            allAnswers.off('click');

            //listens for a click on a possibility
            allAnswers.click(function () { //Good Answer
                if ($(this).text() === response[game.a]){
                    score++;
                    //Sets color for history
                    historyColor = "green";
                } else { //Wrong Answer
                    //Sets color for history
                    historyColor = "red";
                }
                //All cases, before checking for counter end
                historyList.append(`<li style="color: ${historyColor}">${response[game.a]}</li><hr>`);

                if (counter < 10){ //Counter not finished
                    counter++;
                    counterDisplay.text(counter);
                    newGame();
                }
                else { //Counter Finished
                    //Removes event listener on possibilities click
                    allAnswers.off('click');
                    //Removes the flag and displays "game finished"
                    $('h1').css('display', 'inline').text(`Score final: ${score}/10`);
                    image.css('display', 'none');
                }
                //All cases
                scoreDisplay.text(score);
            })
        }


        //listens for play button
        startButton.click(function () {
            //Resets score, history and counter
            score = 0;
            scoreDisplay.text(score);
            counter = 1;
            counterDisplay.text(counter);
            historyList.children().remove();
            //Shows hidden elements on game start
            image.css('display', 'flex');
            $('#container #bottomPart').css('visibility', 'visible');
            $('h1').css('display', 'none');
            //sets a new question
            newGame();
        });

        //listens for history button (mobile only)
        historyButton.click(function (){
            $('#rightPanel').slideToggle();
        })
    })
    //In case of request fail
    .fail(function () {
        alert('Une erreur est survenue, veuillez réessayer ultérieurement');
    })