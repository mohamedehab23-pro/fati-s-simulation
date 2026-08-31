import products from "../../../src/data/fatis.json"

export async function GetProductApi(){
return products
}

export async function GetSpecificProductApi(productId){
const filteredProduct=products.filter((item)=>item.id===Number(productId))
return filteredProduct
}