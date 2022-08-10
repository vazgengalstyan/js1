
//Task 1 js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր:
let links = document.getElementsByClassName("link");

let changeLinksColor = (arr)=>{
   for(let i = 0; i <arr.length; i++){
    if(i % 2 !== 0){
        arr[i].style.color = 'red'
    }
   }
}

changeLinksColor(links);


// Task 2 հղումներից ստանալ href-ները և լցնել մասիվի մեջ:(մասիվը տպել);

let getHrefs =(arr)=>{
let arr2 = [];
for(let i = 0; i < arr.length;i++){
     arr2.push(arr[i].getAttribute('href'))
}
console.log(arr2)
}
getHrefs(links)
console.log('_____________');

// Task 3 հղումներին ավելացնել ոչ ստանդարտ attribute: Օրինակ test attribute, ինչ-որ value-ով:

let addAttribute = (arr)=>{
for(let i = 0; i < arr.length;i++){
    arr[i].setAttribute('test', 'hello')
    console.log(arr[i])
}

}
addAttribute(links)
console.log('_____________');

// Task 4 հղումներին ավելացնել ստանդարտ target attribute _blank value-ով:


let addStandartAttribute = (arr)=>{
    for(let i = 0; i < arr.length;i++){
        arr[i].setAttribute('target', '_blank')
        console.log(arr[i])
    }
    
    }
    addStandartAttribute(links)

    console.log('_____________')
  
// Task 5 ջնջել href attribute-ը ամեն երկրորդ հղումից:
let deleteAttribute = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i].removeAttribute('href')
        }
        console.log(arr[i]);
       }

}

deleteAttribute(links);




