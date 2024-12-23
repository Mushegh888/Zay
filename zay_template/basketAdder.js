function adder(obj){
    let basket = localStorage.getItem("basketBase")
    let data;
    if(basket == null){
        data = []
    }
    else{
        data = JSON.parse(localStorage.getItem("basketBase"))
    }
    let checker = true;
    data.forEach(item => {
        if(item.id == obj.id){
            item.sum = item.sum + obj.sum
            checker = false
        }
    });
    console.log(data)
    if(checker){
        data.push(obj)
    }
    localStorage.setItem("basketBase",JSON.stringify(data))
}

export default adder