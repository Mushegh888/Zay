import functions from "./help.js"
import getData from "./data.js"
import bigPaint from "./bigPaint.js"
import adder from "./basketAdder.js"

let paint = functions.paint

const grid = document.querySelector(".shop-grid")
const main = document.querySelector(".mainShop")

function search(obj,value){
    let category = obj.category.toLowerCase()
    let title = obj.title.toLowerCase()
    let valueLow = value.toLowerCase()
    if(title.includes(valueLow) || valueLow == category){
        return true;
    }
    else{
        return false;
    }
}

function links(){
    
}

function load(data,value){
    getData(data)
        .then(data =>{
            const products = data.products
            let arr = [];
            grid.innerHTML = ""

            if(value == ""){
                arr = [...products];
            }
            else{
                arr = products.filter(item => search(item, value));
            }
            localStorage.setItem("array",JSON.stringify(arr))
            arr.forEach(item => {
                grid.innerHTML += paint(item);
            });

            filter()
            let links = document.querySelectorAll(".link")
            links.forEach(item => {
                item.addEventListener("click",() =>{
                    let id = item.getAttribute("index")
                    main.classList.add("product")
                    main.innerHTML = bigPaint(arr[id - 1]);

                    const btn = document.querySelector(".adding")
                    btn.addEventListener("click",() =>{
                        const btnIndex = btn.getAttribute("index")
                        const quantity = document.querySelector(".quantityInput")
                        let obj = products[btnIndex - 1]
                        obj.sum = parseInt(quantity.value)
                        adder(obj)
                    })
                })
            })
        })
}

//localStorage.clear()

const input = document.querySelector(".shop-search-input")
input.addEventListener("input",() =>{
    let value = input.value
    load('https://dummyjson.com/products',value)
})


const catDiv = document.querySelector(".categories-options")

function filter(){
    catDiv.innerHTML = ""
    let arr = JSON.parse(localStorage.getItem("array"))
    let categories = ["all"]
    arr.forEach(item =>{
        if(!categories.includes(item.category)){
            categories.push(item.category)
        }
    })
    console.log(categories)
    categories.forEach(item => {
        catDiv.innerHTML += `<span class="catLink ${item === "all" ? "active" : ""}">${item}</span>`;
    });

    const catLinks = document.querySelectorAll(".catLink")
    catLinks.forEach(link =>{
        link.addEventListener("click",() =>{
            catLinks.forEach(item2 =>{
                item2.classList.remove("active")
            })
            link.classList.add("active")
            
            grid.innerHTML = ""
            const value = link.textContent === "all" ? "" : link.textContent.toLowerCase();
            const filteredData = arr.filter(item => search(item, value));

            filteredData.forEach(element => {
                grid.innerHTML += paint(element);
            });
            let links = document.querySelectorAll(".link")
            links.forEach(item => {
                item.addEventListener("click",() =>{
                    let id = item.getAttribute("index")
                    main.classList.add("product")
                    main.innerHTML = bigPaint(arr[id - 1]);

                    const btn = document.querySelector(".adding")
                    btn.addEventListener("click",() =>{
                        const btnIndex = btn.getAttribute("index")
                        const quantity = document.querySelector(".quantityInput")
                        let obj = arr[btnIndex - 1]
                        obj.sum = parseInt(quantity.value)
                        adder(obj)
                    })
                })
            })
        })
    })
}


window.onload = load('https://dummyjson.com/products',"")
