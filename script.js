let elem = document.querySelector('#formPart')
let elem2 = document.querySelector('#secondPart');
let paragraph = document.querySelector('#mailValue');

let elem3 = document.forms.myForm.one;
let elem4 = document.forms.myForm.two;




let saveStorage = ()=>{
	localStorage.setItem('email', elem3.value);
	alert(localStorage.getItem('email'))
	localStorage.setItem('password', elem4.value);
	alert(localStorage.getItem('password'))

}

if(localStorage.email){
	elem.style.display = "none";
	elem2.style.display = "block";	
	let text = localStorage.getItem('email');
	let pass = localStorage.getItem('password')
	paragraph.innerHTML = `email is: <strong>${text}</strong> + password is: <strong>${pass}</strong>`;
	
}
let checkStorage =()=>{
	
	elem2.style.display = "none";
	elem.style.display = "block";
	localStorage.removeItem('email', elem3.value);	
	localStorage.removeItem('password', elem3.value);	

}