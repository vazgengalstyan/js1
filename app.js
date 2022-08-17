 let users = [
    {name:'name1', surname: 'surnem1', age:1},
    {name:'name2', surname: 'surnem2', age:2},
    {name:'name3', surname: 'surnem3', age:3},
    {name:'name4', surname: 'surnem4', age:4},
    {name:'name5', surname: 'surnem5', age:5},
    {name:'name6', surname: 'surnem6', age:6},
    {name:'name7', surname: 'surnem7', age:7},
    {name:'name8', surname: 'surnem8', age:8},
    {name:'name9', surname: 'surnem9', age:9},
    {name:'name10', surname: 'surnem10', age:10},
    {name:'name11', surname: 'surnem11', age:11},
    {name:'name12', surname: 'surnem12', age:12},
    {name:'name13', surname: 'surnem13', age:13},
    {name:'name14', surname: 'surnem14', age:14},
    {name:'name15', surname: 'surnem1', age:15},
    {name:'name16', surname: 'surnem2', age:16},
    {name:'name3', surname: 'surnem3', age:17},
    {name:'name4', surname: 'surnem4', age:18},
    {name:'name5', surname: 'surnem5', age:19},
    {name:'name6', surname: 'surnem6', age:20},
    {name:'name7', surname: 'surnem7', age:21},
    {name:'name8', surname: 'surnem8', age:22},
    {name:'name9', surname: 'surnem9', age:23},
    {name:'name10', surname: 'surnem10', age:24},
    {name:'name11', surname: 'surnem11', age:25},
    {name:'name12', surname: 'surnem12', age:26},
    {name:'name13', surname: 'surnem13', age:27},
    {name:'name14', surname: 'surnem14', age:28}
]




let table = document.querySelector('#table')
let paginetion = document.querySelector('#paginetion')
let notesOnPage = 5;
let items = []

let countOfItems = Math.ceil(users.length / notesOnPage)
for (let i = 1; i <=countOfItems ; i++) {
    let li = document.createElement('li')
    li.innerText = i
    paginetion.appendChild(li)
    items.push(li)
}

for(let item of items){
    item.addEventListener('click', function () {
        let pageNum = +this.innerText

        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;

        let notes = users.slice(start, end);
        table.innerHTML = '';
        for(let note of notes){
            let tr = document.createElement('tr')
            table.appendChild(tr)

            createCell(note.name, tr) 
            createCell(note.surname,tr)
            createCell(note.age,tr)
            
        }
    })

}

let createCell = (text,tr)=>{
    let td = document.createElement('td');
    td.innerText = text
    tr.appendChild(td)
}
