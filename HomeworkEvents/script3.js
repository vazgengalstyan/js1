// Task 3

let elem = document.getElementById('block');

let changeColor = () =>{
    elem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}