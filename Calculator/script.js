//there is an html input element with the id'inputBox'
let input = document.getElementById('inputBox');
//buttons are selected using queryselectorall method & stored in the buttons variable
let buttons = document.querySelectorAll('button');

//variable as a empty string it will store the current calculation that the user enters
let string = "";
let arr = Array.from(buttons);

//set up eventlistener for each button in the nodelist 'buttons'
arr.forEach(button => {
    button.addEventListener('click', (e) => {

        //when a button with innerhtml'='is clicked it evaluates the string and update the input value with the result
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        //when'AC' is clicked it resets the string to an empty string
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        //when'DEL' is clicked it removes the last character from the string
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        //when 'x²' it squares the current value of string
        else if (e.target.innerHTML == 'x²') {
            string = string * string;
            input.value = string; //when the input value with x^2 button is clicked it directly show the square of a number
        }
        //for other buttons(number and operator button)it appends their innerHTML to the current expression
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})