function stars(number){
    let htmlStars = ""
    for (let i = 0; i < 5; i++) {
        if(i < number){
            htmlStars += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
        }
        else{
            htmlStars += `<i class="fa-regular fa-star"></i>`
        }
    }
    return htmlStars;
}

function money(num){
    return num.toLocaleString('de-DE') + "$";
}

function paint(obj,basket){
    let htmlx = ""
    let img = `<img class="link" index=${obj.id} src="${obj.images[0]}">`
    let starsDiv = stars(Math.round(obj.rating))
    htmlx = `
    <div class="shop-grid-item d-grid justify-content-center py-3">
        ${img}
        <div class= "vay">
        <h4 class="link px-2 text-center" index=${obj.id}>${obj.title}</h4>
        <div class="stars d-flex justify-content-center gap-2">
            ${starsDiv}
        </div>`
    if(basket){
        htmlx += `<button class="basket-but mt-2">Buy for ${money(obj.price * obj.sum)}</button>
            <span>You droped in Basket ${obj.sum} items</span>
        </div>
        </div>`
    }
    else{
        htmlx += `<div class="price text-center mt-2">${money(obj.price)}</div></div></div>`
    }
    
    return htmlx
}

export default {
    "paint": paint,
    "money": money,
    "stars": stars
}
