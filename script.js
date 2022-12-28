// let display = "";
// let buttons = document.querySelectorAll('.button')

// buttons.forEach((button) => {
//     button.addEventListener('click',(e)=>{
//         let value = e.target.innerText;
//         console.log(value);
//         display = display+value;
//         document.querySelector(".display").value = display;
//     })
// });



const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = ()=>{
        if(item.innerHTML == "C"){
            display.innerHTML = "";
        }
        else if(item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }
        else if(display.innerHTML != "" && item.innerHTML == "="){
            display.innerHTML = eval(display.innerHTML);
        }
        else if(display.innerHTML == "" && item.innerHTML == "="){
            display.innerHTML = "EMPTY!";
            setTimeout(() => {
                display.innerHTML = ""
            }, 2000);
        }
        else if(item.innerHTML == "X"){
            display.innerHTML += "*";
        }
        
        else{

            display.innerHTML += item.innerHTML;
        }

        let string1 = display.innerText.toString();
        if(string1.length > 13){
            display.innerText = string1.substr(0, 12);
            console.log(display.innerHTML)
        }
    }
})

const toggelBtn = document.querySelector(".toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
toggelBtn.onclick = () => {
    calculator.classList.toggle("dark");
    toggelBtn.classList.toggle("active");
    isDark = !isDark;
};