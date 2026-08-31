import products from "../../../public/data/fati's.json"

export async function GetProductApi(){
return products
}

export async function GetSpecificProductApi(productId){
const filteredProduct=products.find((item)=>item.id===Number())
return filteredProduct
}