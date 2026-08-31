import category from "../../../public/data/fati's.json"

export  function GetCategory(){
return category
}

export async function GetCategoryApi(id,index){
const data=category.find((field)=>field.[index]===Number(id))
return data
}