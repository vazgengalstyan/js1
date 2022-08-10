let actionFunc = function(){
    let result;
    let action1 = document.getElementById('num3').value
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   if(action1==='+'){
    result = number1 + number2
   }
    else if(action1 === '-'){
        result = number1 - number2
    }
    else if(action1 === '*'){
     result = number1 * number2
    }
      else if(action1 === '/'){
        result = number1 / number2
      }
      else if(action1 === '%'){
        result = number1 % number2
      }
      else if(action1 === 'x2'){
        result = number1 ** 2
      }
      else if(action1 === 'x3'){
        result = number1 ** 3
      }
      else if(action1 === 'x-y'){
        result = number1 ** number2
      }

let p = document.getElementById('p')
p.innerHTML = result;

}