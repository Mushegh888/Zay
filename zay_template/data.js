function getData(url){
    return fetch(url)
        .then(res =>{
            if(res.ok){
                return res.json()
            }
            else{
                console.error("mi Ban sxala")
            }
        })
}

// function takeData(url){
//     getData(url)
//         .then(data =>{
//             const products = data.products
//             return products
//             console.log(products)
//         })
// }



export default getData