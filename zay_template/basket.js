import functions from "./help.js"
let paint = functions.paint


const data = JSON.parse(localStorage.getItem("basketBase"))
const grid = document.querySelector(".shop-grid")

if(data == null){
    grid.innerHTML = "You havn't droped anyting in basket yet. Try Now In section Shop!"
}
else{
    data.forEach(item =>{
        grid.innerHTML += paint(item,true)
    })
}