let elem = document.getElementById('block');

let moveBlock = (event) =>{
    elem.style.left = event.pageX + 'px';
    elem.style.top = event.pageY + 'px'
}

elem.addEventListener("mousedown", function (event) {
    document.onmousedown = function(event) {
        moveBlock(event);
    }
})
    
