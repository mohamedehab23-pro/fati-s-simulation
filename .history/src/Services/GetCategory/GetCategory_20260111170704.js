import products from "../../../public/data/fati's.json"

export async function GetProductsApi(){
return products
}

export async function GetCategoryApi(name){
const data=products.find((field)=>field[0].category===name)
return data
}