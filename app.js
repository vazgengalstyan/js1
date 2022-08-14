// let block = document.querySelector('#block')


// // 1. mknik@ sharjeluc element@ het@ petq e sharjvi.

// document.addEventListener('mousemove',function (event) {
 
//   block.style.top = event.clientY + 'px';
//   block.style.left = event.clientX + 'px';

// })




// 2. mknik@ elementi vra bereluc petq e element@ haytnvi ekrani patahakan dirqum


// let x = Math.round(Math.random()*110)
// let y= Math.round(Math.random()*100)

// block.addEventListener('mousemove',function () {
//  let z= Math.floor(Math.random()*2)
//   if (z === 0) {
//     block.style.top = `${block.offsetTop - x}px`;
//     block.style.left = `${block.offsetLeft - y}px`;
//   }else if(z === 1){
//     block.style.top = `${block.offsetTop + x}px`;
//     block.style.left = `${block.offsetLeft + y}px`;
//   }
// })




//3. elementi vra sexmeluc petq e element@ stana random guyn


// let changeColor = ()=>{
//   block.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// block.addEventListener('click', changeColor)

// 5.

// document.addEventListener('click',function(event) {
//   block.style.top = event.clientY + 'px';
//   block.style.left = event.clientX + 'px';
// })

// 6. stexcel html-um forma (anun, axganun, email, tariq, ser, hasce) 
//nshvac dashterov yev submit sexmeluc tpeq formai arjeqner@ console-um obyekti tesqov

let submit = document.querySelector('#submit');

let name = document.getElementById('name');
let lastnem = document.getElementById('lastnem');
let male = document.getElementById('male');
let female = document.getElementById('female');
let date = document.getElementById('date');
let address = document.getElementById('address');
let email = document.getElementById('email');

let func = () => {
    let user = {};
    if (male.value === true) {
        user.male = male.value;
    } else {
        user.female = female.value;
    }
    user.name = name.value;
    user.lastnem = lastnem.value;
    user.date = date.value;
    user.address = address.value;
    user.email = email.value;
    
    return user
}

submit.addEventListener('click', function () {
  console.log(func());
});