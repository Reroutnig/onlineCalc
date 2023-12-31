(function(){
    let screen = document.querySelector('.input');
    let numpad = document.querySelectorAll('.button');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let answer = null;



    // evaluates math equations give by user

    function evalEquation(expression) {
        let operators = expression.split(/[\d.]+/).filter(Boolean);
        let numbers = expression.split(/[\+\-\*\/]/).map(parseFloat);
        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            let operator = operators[i];
            let num = numbers[i + 1];

            if (isNaN(num) || num === undefined) {
                return 'Error';
            }

            switch (operator) {
                case '+':
                    result += num;
                    break;
                case '-':
                    result -= num;
                    break;
                case '*':
                    result *= num;
                    break;
                case '/':
                    if (num !== 0) {
                        result /= num;
                    } else {
                        return 'Error';
                    }
                    break;
                default:
                    return 'Error';
            }
        }

        return result;
    }

    
    function ContWPrevAns(value){
        if(answer !== null && screen.value === "") {
            // If there is a previous answer and the screen is empty, use the answer for the new calculation
            screen.value = answer + value;
        } else {
            screen.value += value;
        }
    }

    // When equal button is clicked, evaluate the equation and displays answer
    equal.addEventListener('click', function(e){
        // Checks if there's any values on screen
        if(screen.value === '') {

            // does nothing if there nothing on screen
            screen.value = "";
        } else {
            answer = evalEquation(screen.value);
            screen.value = (answer === 'Error') ? 'Error' : parseFloat(answer.toFixed(2)); // Round the result to 2 decimal places
        }
    });

    // Displays numbers and operations on screen when clicked
    numpad.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.val;
            ContWPrevAns(value);
        });
    });

    // When 'c' is clicked, clear the screen and reset the answer
    clear.addEventListener('click', function(e){
        screen.value = "";
        answer = null;
    });
})();