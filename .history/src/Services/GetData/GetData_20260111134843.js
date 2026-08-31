import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("/data/data.json")
console.log(response);
return response.data
    }catch(err){
        console.log(err);
        
    }
}

export async function GetSpecificCategory(id){
try{
const response=await axios.get('/data/data.json'+id)
console.log(response);
return response.data
}catch(err){

}
}