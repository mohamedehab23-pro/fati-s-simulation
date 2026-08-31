import products from "../../../public/"

export async function GetProductsApi(){
return products
}

export async function GetCategoryApi(categoryName){
const filteredData=products.filter((item)=>item.category===categoryName)
return filteredData
}