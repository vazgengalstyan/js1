
// Task 2 Calculator

let func = () =>{
	let operator = id2.value;
	let num1 = id1.value;
	let num2 = id3.value;
		let result;
	if(!(Number(num1)) || !(Number(num2))){
		alert('insert number')
	}else if(operator === '+'){
		result = (Number(num1) + Number(num2))
	}else if(operator === '-'){
	result = (Number(num1) - Number(num2))
	}else if(operator === '*'){
	result = (Number(num1) * Number(num2))
	}else if(operator === '/'){
	result = (Number(num1) / Number(num2))
	}else{
		alert('unknown operator');
	}
	
	
let p = document.createElement('p')
	p.innerHTML = `the result of ${num1} ${operator} ${num2} is <strong>${result}</strong>`;
	main.append(p)
}