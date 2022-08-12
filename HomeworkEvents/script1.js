let elem = document.getElementById('block');



elem.addEventListener("mousemove", function (event) {
    document.onmousemove = function(event) {
        elem.style.left = event.pageX + 'px';
        elem.style.top = event.pageY + 'px'
    }
})
    
