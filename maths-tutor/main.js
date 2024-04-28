/** YOUR DATA STRUCTURE HERE */

/** Do not edit below this line! The following code generates and shows questions, and tracks correct answers */

let questionsAnswered = 0;
let currentQuestion;


class Question {
    
    constructor() {
        this.correct = false;
    }

    getText() {
        const firstNumber = Math.floor(Math.random() * 10) + 1;
        const secondNumber = Math.floor(Math.random() * 10) + 1;
        const operator = ["+","-","*","/"];
        const randomOperator = Math.floor(Math.random() * operator.length);
        const mathquestion = `${firstNumber} ${operator[randomOperator]} ${secondNumber}`;
        this.questionAnswer = eval(mathquestion);
        return `What is ${mathquestion}?`;
    }

    checkAnswer(answer){
    
        // const correctAnswer = new String ("firstNumber + operator[randomOperator]+ secondNumber");
        // eval(String(correctAnswer));
        
            if (this.questionAnswer == answer){
                this.correct = true;
                return true;
            }

            else{
                this.correct = false;
                return false;
            }

    }

    getFeedbackForAnswer(){
        if (this.correct === true){
            return "Nice work!";
        }

        else{
            return "Good try, but you're wrong. Try again.";
        }
    }

}




/**
 * Updates the progress message
 */
function updateProgress() {
    document.getElementById("progress").innerHTML = "<p>You have answered " + questionsAnswered + " question(s) so far.</p>";
}

/**
 * Displays a new question
 */
function showQuestion() {
    currentQuestion = new Question();
    document.getElementById("question").innerText = currentQuestion.getText();
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("answer").value = "";
}

document.getElementById("check-answer").addEventListener("click", function () {
    const answer = document.getElementById("answer").value;
    if (currentQuestion.checkAnswer(answer)) {
        questionsAnswered++;
        updateProgress();
    }
    document.getElementById("feedback").innerHTML = "<p>" + currentQuestion.getFeedbackForAnswer(answer) + "</p>";

});

document.getElementById("new-question").addEventListener("click", showQuestion);

showQuestion();