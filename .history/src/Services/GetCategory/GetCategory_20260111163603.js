import category from "../../../public/data/fati's.json"

export  function GetCategory(){
return category
}

export async function GetCategoryApi(name){
const data=category.find((field)=>field[0].category===name)
return data
}