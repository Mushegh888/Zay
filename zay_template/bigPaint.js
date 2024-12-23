import functions from "./help.js"

let stars = functions.stars
let money = functions.money

function bigPaint(obj){
    let htmlx = ""
    let img = `<img class="col-lg-4 col-12" src="${obj.images[0]}">`
    let starsDiv = stars(Math.round(obj.rating))
    htmlx = `
    <div class="product d-lg-flex d-grid gap-5">
        ${img}
        <div class="product-info d-grid gap-4">
            <h1>${obj.title}</h1>
            <span class="product-price">${money(obj.price)}</span>
            <div class="stars d-flex flex-wrap gap-2 align-items-center">
                ${starsDiv}
                Rating ${obj.rating} | reviews (${obj["reviews"].length})
            </div>
            <span><b>Brand:</b> ${obj.brand}</span>
            <span><b>Description:</b> ${obj.description}</span>
            <span><b>shipping:</b> ${obj.shippingInformation}</span>
            <span><b>Return policy:</b> ${obj.returnPolicy}</span>
            <div class="quantity d-flex align-items-center gap-3">
                <b>quantity:</b>
				<input class="quantityInput" type="number" value="${obj.minimumOrderQuantity}" min="${obj.minimumOrderQuantity}">
			</div>
            <div class="product-buts d-md-flex d-grid gap-3 gap-lg-5 mt-4">
				<button index=${obj.id} class="product-but">Buy</button>
				<button index=${obj.id} class="product-but adding">Add to Cart</button>
			</div>
        </div>
    </div>
    `
    return htmlx;
}

export default bigPaint