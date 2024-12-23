/////content
const content = document.getElementsByClassName('content')[0]
const content_arr = [
{
	index: 0,
	img: "content/img1.jpg",
	headline: "Zay eCommerce",
	headline2: "Tiny and Perfect eCommerce Template",
	text: "Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8."
},
{
	index: 1,
	img: "content/img2.jpg",
	headline: "Proident occaecat",
	headline2: "Aliquip ex ea commodo consequat",
	text: "You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites."
},
{
	index: 2,
	img: "content/img3.jpg",
	headline: "Repr in voluptate",
	headline2: "Ullamco laboris nisi ut",
	text: "We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you."
}
]
/////default///////////
for(let item of content_arr){
	var index = content.getAttribute("index")
	content.querySelector('img').src = item.img
	content.querySelector('h1').innerHTML = item.headline
	content.querySelector('h2').innerHTML = item.headline2
	content.querySelector('p').innerHTML = item.text
	content.querySelector('h1').style.color = "var(--green)"
	break;
}
/////////////////////
let activeIndex = null;
function activate() {
    let pult = content.getElementsByClassName('pult')[0];
    let i = parseInt(content.getAttribute("index"));

    if (activeIndex !== null) {
        pult.children[activeIndex].style.background = "";
    }
    pult.children[i].style.background = "var(--green)";
    activeIndex = i;
}
activate()

function next(parent) {
	let index = parseInt(parent.getAttribute("index"));
	index = (index + 1) % content_arr.length
	if(index == 0){
		content.querySelector('h1').style.color = "var(--green)"
	}
	else{
		content.querySelector('h1').style.color = "var(--black)"
	}
	parent.setAttribute("index",index)
	parent.querySelector('img').src = content_arr[index].img
	parent.querySelector('h1').innerHTML = content_arr[index].headline
	parent.querySelector('h2').innerHTML = content_arr[index].headline2
	parent.querySelector('p').innerHTML = content_arr[index].text
	
	parent.getElementsByClassName('text')[0].classList.add('right');
	parent.querySelector('img').classList.add('right')
	setTimeout(() => parent.getElementsByClassName('text')[0].classList.remove('right'), 1000);
	setTimeout(() => parent.querySelector('img').classList.remove('right'), 1000);
	activate()
}

function per(parent) {
	let index = parseInt(parent.getAttribute("index"));
	index = (index - 1 + content_arr.length) % content_arr.length
	parent.setAttribute("index",index)
	parent.querySelector('img').src = content_arr[index].img
	parent.querySelector('h1').innerHTML = content_arr[index].headline
	parent.querySelector('h2').innerHTML = content_arr[index].headline2
	parent.querySelector('p').innerHTML = content_arr[index].text

	parent.getElementsByClassName('text')[0].classList.add('left');
	parent.querySelector('img').classList.add('left')
	setTimeout(() => parent.getElementsByClassName('text')[0].classList.remove('left'), 1000);
	setTimeout(() => parent.querySelector('img').classList.remove('left'), 1000);
	activate()
}

function selector(but,parent){
	let grandParent = parent.parentNode

	let index = but.getAttribute("index")
	if(index < grandParent.getAttribute("index")){
		grandParent.getElementsByClassName('text')[0].classList.add('left');
		grandParent.querySelector('img').classList.add('left')
		setTimeout(() => grandParent.getElementsByClassName('text')[0].classList.remove('left'), 1000);
		setTimeout(() => grandParent.querySelector('img').classList.remove('left'), 1000);
	}else{
		grandParent.getElementsByClassName('text')[0].classList.add('right');
		grandParent.querySelector('img').classList.add('right')
		setTimeout(() => grandParent.getElementsByClassName('text')[0].classList.remove('right'), 1000);
		setTimeout(() => grandParent.querySelector('img').classList.remove('right'), 1000);
	}
	
	grandParent.setAttribute("index",index)
	grandParent.querySelector('img').src = content_arr[index].img
	grandParent.querySelector('h1').innerHTML = content_arr[index].headline
	grandParent.querySelector('h2').innerHTML = content_arr[index].headline2
	grandParent.querySelector('p').innerHTML = content_arr[index].text

	

	if (activeIndex !== null) {
        grandParent.getElementsByClassName('pult')[0].children[activeIndex].style.background = "";
    }
    but.style.background = "var(--green)";
    activeIndex = index;
}


//categories
let cat = document.getElementsByClassName('categories')[0]
const cat_head = {
	headline: "Categories of The Month",
	text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
let head = cat.getElementsByClassName('head')[0]
head.querySelector('h1').innerHTML = cat_head.headline

const cat_flex = [
{
	img: "categories/img1.jpg",
	name: "Watches"
},
{
	img: "categories/img2.jpg",
	name: "Shoes"
},
{
	img: "categories/img3.jpg",
	name: "Accessories"
}
]


let htmlx = "";
for(let index of cat_flex){
	htmlx += `
	<div class="item d-grid gap-3 justify-content-center">
		<img src="${index.img}">
		<h1>${index.name}</h1>
		<a class="item-btn" href="shop.html">Go Shop</a>
	</div>
	`
}
let flex = cat.getElementsByClassName('flex')[0]
flex.innerHTML = htmlx;