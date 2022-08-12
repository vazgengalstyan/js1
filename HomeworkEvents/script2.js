let elem = document.getElementById('block');

let moveBlock = (event) =>{
    elem.style.left = getRandomNumber(10, window.innerHeight) + 'px';
    elem.style.top = getRandomNumber(10, window.innerWidth)+ 'px';
}

elem.addEventListener("mousemove", moveBlock)


function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }