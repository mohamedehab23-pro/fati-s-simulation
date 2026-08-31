

import data from '../../../public/data/data.json'
export async function GetData(){
    return data
}


export async function GetSpecificCategoryApi(id){
    const category= data.find((item)=>item.id===Number(id))
    return category
}