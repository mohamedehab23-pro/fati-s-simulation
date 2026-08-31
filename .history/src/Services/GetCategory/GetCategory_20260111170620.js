import prod from "../../../public/data/fati's.json"

export  function GetProductsApi(){
return prod
}

export async function GetCategoryApi(name){
const data=prod.find((field)=>field[0].category===name)
return data
}