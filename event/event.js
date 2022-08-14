
let elem = document.getElementById('example')
let elem1 = document.getElementById('example1');
let elem2 = document.getElementById('example2')
let elem3 = document.getElementById('example3')
elem.addEventListener('click',function(){
    elem.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)

})
let func = () => {
    elem1.style.top = Math.random() *  (window.innerHeight - elem1.offsetHeight)+'px';
    elem1.style.right = Math.random() * (window.innerWidth - elem1.offsetWidth)+'px' 
}

onmousemove= function(event) {
    elem2.style.top = event.clientY + 'px'
    elem2.style.left = event.clientX + 'px'
    
}

onclick = function(event) {
    elem3.style.top = event.clientY + 'px'
    elem3.style.left = event.clientX + 'px'
}


let submit = document.getElementById('submit');
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let birthday = document.getElementById('birthday')
let address = document.getElementById('address')
let male = document.getElementById('male')
let female = document.getElementById('female')

let valueFunc =() =>{
    let obj = {}
        obj.fname = fname.value 
        obj.lname = lname.value 
        obj.email = email.value
        obj.female = female.value
        obj.female = female.value
        obj.birthday = birthday.value
        obj.address = address.value
       
        
        console.log(obj)    
    }
   
    







