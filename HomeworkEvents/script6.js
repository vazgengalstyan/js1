
// Task 6 

let elem = document.forms.myForm;
console.log(elem)

let obj={};

let getValues =() =>{

    for(let item of elem){
       alert(`${item.name} ${item.value}`)        
    }
      
}

