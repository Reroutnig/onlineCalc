
(function(){
let screen = document.querySelector('.input');
let numpad = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let answer=null;
//stores value of button clicked
function buttonClicked(value){
    if(answer !== null) {
        // clear calculation if there's a previous answer
        screen.value = '';
        answer = null;
    }
    screen.value += value;
}

// displays numbers on screen when clicked
    numpad.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value=e.target.dataset.val;
            buttonClicked(value);
        })
    });
    function equalClickNext(){
        if(screen.value=answer && equal.addEventListener('click')){
            screen="";
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

    //to clear screen when 'c' is clicked
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
   
})();
