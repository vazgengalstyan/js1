// Տնային 5․1
// mknik@ sharjeluc element@ het@ petq e sharjvi.

// const container = document.getElementById('full')

// container.addEventListener("mousemove", (e)=>{
//     const block = document.getElementById('blok')

//     blok.style.left = e.pageX +'px';
//     blok.style.top = e.pageY+'px';
// });

// Տնային 5․2
// mknik@ elementi vra bereluc petq e element@ haytnvi ekrani patahakan dirqum․

// const container = document.getElementById('full')

// container.addEventListener("mousemove", (e)=>{
//     const block = document.getElementById('blok')

//     blok.style.left = Math.random() * (window.innerWidth - blok.offsetWidth)+'px'
//     blok.style.top = Math.random() *  (window.innerHeight - blok.offsetHeight)+'px';
// });

// Տնային 5․3
//elementi vra sexmeluc petq e element@ stana random guyn

// const   blok = document.getElementById('blok');
// blok.addEventListener("click", function(e) {
//     blok.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// })

// Տնային 5․4

//elementi vra sexmeluc petq e element@ stana random guyn

const   blok = document.getElementById('blok');


blok.addEventListener("mousedown", function(cord) {
    document.onmousedown = function(cord) {
        blok.style.left = cord.pageX + 'px';
        blok.style.top = cord.pageY + 'px'
    }
})


