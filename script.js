(function(){
let screen = document.querySelector('.inputbox');
let buttons = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
// displays numbers on screen when clicked
buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        let value=e.target.dataset.num;
        screen.value += value;
    })
});
//when equal button is clicked shows answer
    equal.addEventListener('click', function(e){
        //checks if there's any values on screen
        if(screen.value === ''){ //if empty then dont show anything when equal sign is clicked
            screen.value = "";
        }else{
            let answer = eval(screen.value); 
            screen.value = answer;
        }
    })
    //to clear screen when 'c' is clicked
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();