let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};


let objFunc = data => {
  let ul = document.createElement('ul');
  for (let key in data) {
  let li = document.createElement('li');
    li.innerText = key;


    let valueUl = objFunc(data[key]);
    if (valueUl) {
      li.append(valueUl);
      valueUl.style.color = 'red'
    }

    ul.append(li);
  }

  return ul;
}


let woodFunc = (wood, data)=> {
  wood.append(objFunc(data));
}
let wood = document.getElementById('wood');
woodFunc(wood, data);

let arr = [
  {element: 'p', content: 'test text', id: 1}, 
  {element: 'div', class: 'block', id: 2}, 
  {element: 'input', value: 'test'}
] 

let arrFunc = arr =>{
  arr.forEach((item)=> {
     
     let elem =document.createElement(item.element)
      for (let  key in item) {
          if(key === 'element'){
              continue
              
          }
          else if(key==='content'){
              elem.innerText = item[key]

          }
          else {
              elem.setAttribute(key,item[key])
             
          }
          document.getElementById('element').append(elem)
      }
    
    });

}
arrFunc(arr)