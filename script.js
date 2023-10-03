(function(){
    let screen = document.querySelector('.input');
    let numpad = document.querySelectorAll('.button');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let answer = null;

    // evalualtes the math expressions
    function evaluateExpression(expression) {
        let numbers = expression.split(/[\+\-\*\/]/);
        let operator = expression.match(/[\+\-\*\/]/);
        let result;

        if (numbers.length === 2 && operator) {
            let num1 = parseFloat(numbers[0]);
            let num2 = parseFloat(numbers[1]);
            switch (operator[0]) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        return 'Error';
                    }
                    break;
                default:
                    return 'Error';
            }
        } else {
            return 'Error';
        }

        return result;
    }

   //saves the previous answer in order to use for next calculations if 'c' isn't clicked
    function ContWithPrevAns(value){
        if(answer !== null && screen.value === "") {
            screen.value = answer + value;
        } else {
            screen.value += value;
        }
    }

    // When equal button is clicked, evaluate the expression and display the answer
    equal.addEventListener('click', function(e){
        // Checks if there's any values on screen
        if(screen.value === '') {
            // If empty, do nothing
            screen.value = "";
        } else {
            answer = evaluateExpression(screen.value);
            screen.value = answer;
        }
    });

    // Displays numbers and operations on screen when clicked
    numpad.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.val;
            ContWithPrevAns(value);
        });
    });

    // When 'c' is clicked, clear the screen and reset the answer
    clear.addEventListener('click', function(e){
        screen.value = "";
        answer = null;
    });
})();
