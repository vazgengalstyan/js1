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

