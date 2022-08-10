// Task 1 DVD game

let elem = document.getElementById('block')

let firstLeft = elem.offsetLeft;
let firstTop = elem.offsetTop;

let moveBlock = (x)=>{

	let moveBlockRight=(x)=>{
		
		setInterval(()=>{	
	x.style.left = `${x.offsetLeft + 100}px`;	
	if(x.offsetLeft > screen.width - x.offsetWidth){
		x.style.left = `${firstLeft}px`
	}
}, 1000)	

	}
	moveBlockRight(x)

	let moveBlockTop=(x)=>{
		
		setInterval(()=>{	
	x.style.top = `${x.offsetTop + 100}px`;	
	if(x.offsetTop > screen.height - x.offsetHeight ){
		x.style.top = `${firstTop}px`
	}
}, 1000)	

	}
	moveBlockTop(x)
}


moveBlock(elem)
