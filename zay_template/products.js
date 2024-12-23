import functions from "./help.js"
import getData from "./data.js"

let stars = functions.stars
let money = functions.money



function random(arr,conut){
    let newArr = arr.sort(function(item,index){
        return Math.random() - 0.5
    })
    return newArr.slice(0,conut)
}

function paint(obj){
    let htmlx = ""
    let img = `<img src=${obj.images[0]}>`
    let starsDiv = stars(Math.round(obj.rating))
    htmlx = `
    <div class="item2">
        ${img}
        <div class="text d-grid gap-1">
            <div class="stars d-flex gap-2">
            ${starsDiv}
            </div>
            <div class="price d-flex justify-content-end">${money(obj.price)}</div>
            <div class="item2_info">
                <h3>${obj.title}</h3>
                <p>${obj.description}</p>
		    </div>
            <div class="item2_info2">reviews (${obj["reviews"].length})</div>
        </div>
	</div>
    `
    return htmlx
}


const productsDiv = document.querySelector(".products-items")


function load(url){
	productsDiv.innerHTML = ""
    getData(url)
        .then(data =>{
            const products = data.products
            console.log(products)
			const newArr = random(products,3)
			newArr.forEach(item => {
				productsDiv.innerHTML += paint(item)
			});
        })
}


window.onload = load('https://dummyjson.com/products')