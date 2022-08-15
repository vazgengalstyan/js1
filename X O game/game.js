let num = 0;

  let func = function(event) { 

   let elem = document.getElementById("glavDiv")
   if (event.target.innerHTML) return;

    if (num % 2 === 0){
        event.target.innerHTML= 'X';
    }
    else {
        event.target.innerHTML = 'O';
    }
    num++; 
    gameFunc();
  };
let xFunc = () => {
  let photo = document.createElement('img');
  photo.src = '././photo/5.png';
  photo.width = '300';
  photo.height = '200'
  let div1 = document.createElement('div');
  div1.append(photo);
  document.body.append(div1);
}
let yFunc = () => {
    let photo = document.createElement('img');
    photo.src = '././photo/6.png';
    photo.width = '300';
    photo.height = '200'
    let div1 = document.createElement('div');
    div1.append(photo);
    document.body.append(div1);
  }
  let drawFunc = () => {
    let photo = document.createElement('img');
    photo.src = '././photo/7.jpg';
    photo.width = '300';
    photo.height = '200'
    let div1 = document.createElement('div');
    div1.append(photo);
    document.body.append(div1);
  }
  let gameFunc = () =>{
    let game = document.getElementsByClassName("game");
    let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i = 0; i<arr.length; i++){
            if(game[arr[i][0]].innerHTML == 'X' && game[arr[i][1]].innerHTML == 'X' && game[arr[i][2]].innerHTML == 'X'){            
                xFunc()
                setTimeout(()=>{
                    location.reload()
                },1500)
                
            }
            else if(game[arr[i][0]].innerHTML == 'O' && game[arr[i][1]].innerHTML == 'O' && game[arr[i][2]].innerHTML == 'O'){
                yFunc()
                setTimeout(()=>{
                    location.reload()
                },1500)
            }else if(num === 9){
                drawFunc()
                setTimeout(()=>{
                    location.reload()
                },1500)
                break
            }
            
           }
            }
        
      




