const bars = document.querySelector(".clickBars")
const hiddenMenu = document.querySelector(".hideMenu")

bars.addEventListener("click",() =>{
	console.log(bars)
	if(!hiddenMenu.classList.contains("opened")){
		hiddenMenu.classList.add("opened")
		hiddenMenu.classList.remove("closed")
	}
	else{
		hiddenMenu.classList.remove("opened")
		hiddenMenu.classList.add("closed")
	}
})

let num = document.querySelectorAll(".num")

let basketBase = JSON.parse(localStorage.getItem("basketBase"))
num.forEach(item =>{
	item.innerHTML = basketBase == null ? "0" : basketBase.length
})