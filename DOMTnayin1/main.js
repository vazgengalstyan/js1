let colors =[ 'red','green','yellow']
let element1 = document.getElementById('test_id1');
let element2 = document.getElementById('test_id2');
let element3 = document.getElementById('test_id3');
let selectedColorIndex1 = 0;
let selectedColorIndex2 = 1;
let selectedColorIndex3 = 2;


let changeColor1 = (element,color) => {
    if(selectedColorIndex1<colors.length-1){
        selectedColorIndex1++;
    }else{
        selectedColorIndex1 = 0;
    }
    element.style.backgroundColor = colors[selectedColorIndex1];
}


let changeColor2 = (element,color) => {
  if(selectedColorIndex2<colors.length-1){
      selectedColorIndex2++;
  }else{
      selectedColorIndex2 = 0;
  }
  element.style.backgroundColor = colors[selectedColorIndex2];
}


let changeColor3 = (element,color) => {
  if(selectedColorIndex3<colors.length-1){
      selectedColorIndex3++;
  }else{
      selectedColorIndex3 = 0;
  }
  element.style.backgroundColor = colors[selectedColorIndex3];
}



let allblok = function(){
  changeColor1(element1);
  changeColor2(element2);
  changeColor3(element3);
}

setInterval(allblok, 1000)




 
