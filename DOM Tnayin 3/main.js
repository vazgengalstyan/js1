// Տնային 3․1
// Հետեւյալ օբյեկտից նկարել ծառ html-ում, և ծառի ամեն ճյուղը ներկել կարմիր։

// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },
//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };
// let container = document.getElementById('container')


// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
//   }
//   function createTreeText(obj) { // standalone recursive function
//     let li = '';
//     let ul;
//     for (let key in obj) {
//       li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//       ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
//   }

//   createTree(container, data);
/*

function getList(object) {
    return Object.values(object).reduce((ul, v) => {
        if (!v || typeof v !== 'object') return ul;
        var li = document.createElement('div');
        li.appendChild(document.createTextNode(v.text));
        li.appendChild(getList(v));
        ul.appendChild(li);
        return ul;
    }, document.createElement('div'));
}
document.body.appendChild(getList(data));
*/

// Տնային 3․2
// Գրել ֆունկցիա որը նման մասիվից html-ում կավելացնի էլեմենտներ։
const arr=[{element: 'p', content: 'test text', id: 1}, 
{element: 'div', class: 'block', id: 2}, 
{element: 'input', value: 'test'}]

let array=function(a){
    a.forEach(function(item, index, array) {
       
        let x=document.createElement(item.element)
        for (const iterator in item) {
            if(iterator==='element'){
                continue
            }
            else {x.setAttribute(iterator, item[iterator])}
           
        }
       document.body.appendChild(x)
      });
      

}
array(arr)