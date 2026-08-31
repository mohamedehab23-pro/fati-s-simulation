// import axios from "axios";

// export async function GetData(){
//     try{
// const response=await axios.get("/data/data.json")
// // console.log(response);
// return response.data
//     }catch(err){
//         // console.log(err);
        
//     }
// }

// export async function GetSpecificCategoryApi(id){
// try{
// const response=await axios.get(`/data/data.json`+id )
// // console.log(response);
// return response.data
// }catch(err){
// // console.log(err);

// }
// }

import data from '../../../public/data/data.json'
export async function GetData(){
    return data
}


export async function GetSpecificCategoryApi(id){
    const category= data.find(())
}