let action;
let actionFunc = function(){
    let result;
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   if(action==='+'){
    result = number1 + number2
   }
    else if(action === '-'){
        result = number1 - number2
    }
    else if(action === '*'){
     result = number1 * number2
    }
      else if(action === '/'){
        result = number1 / number2
      }
      else if(action=== '%'){
        result = number1 % number2
      }
      else if(action === 'x2'){
        result = number1 ** 2
      }
      else if(action === 'x3'){
        result = number1 ** 3
      }
      else if(action === 'x-y'){
        result = number1 ** number2
      }

let p = document.getElementById('p')
p.innerHTML = result;

}