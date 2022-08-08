// Task 1 DOM tree

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


let createTree = (obj)=>{
  let ul = document.createElement('ul');
      body.append(ul);
  for(let key in obj){
      let li = document.createElement('li');
          li.innerHTML = key;
          ul.style.color = 'red'
      let child = createTree(obj[key]);
          child.style.color = 'black'
      if(child){
          li.append(child);
      }
                  ul.append(li)
  }

  return ul

}
createTree(data);

// Task 2 

let arr = [{element: 'p', content: 'test text', id: 1}, 
{element: 'div', class: 'block', id: 2},
{element: 'input', value: 'test'}]
let x;
let addElements = (arr) =>{
      for(let i = 0; i <arr.length; i++){
           x = document.createElement(arr[i].element);
          x.innerHTML = arr[i].content?arr[i].content:null;
              x.value = arr[i].value?arr[i].value:null;
              if(arr[i].class){
                  x.classList.add(arr[i].class)
              }
          if(arr[i].id){
              x.id = arr[i].id
          }
          body.append(x);
          console.log(x)
      }
  }


  
addElements(arr)

  let div = document.querySelector('.block');
  div.style.cssText = `height: 100px;
  width: 100px;
  margin:10px;
  border:1px solid black;
  `

  