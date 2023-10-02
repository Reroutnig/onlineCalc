(function(){
    let screen = document.querySelector('.input');
    let numpad = document.querySelectorAll('.button');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let answer = null;

    // Function to handle numerical button click
    function ContWithPrevAns(value){
        if(answer !== null && screen.value === "") {
            // If there is a previous answer and screen is empty, use the answer for the new calculation
            screen.value = answer + value;
        } else {
            screen.value += value;
        }
    }

    

 //when equal button is clicked shows answer
 equal.addEventListener('click', function(e){
    //checks if there's any values on screen
    if(screen.value === ''){ //if empty then dont show anything when equal sign is clicked
        screen.value = "";
    }else{
         answer = eval(screen.value); 
        screen.value = answer;
    }
})

// displays numbers and operations on screen when clicked
numpad.forEach(function(button){
    button.addEventListener('click', function(e) {
        let value=e.target.dataset.val;
        ContWithPrevAns(value);
    })
});

   
    // when 'c' is clicked the screen will clear
    clear.addEventListener('click', function(e){
        screen.value = "";
        answer = null;
    });
})();

