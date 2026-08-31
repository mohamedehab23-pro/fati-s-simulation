import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("data.json")
const data=await response.j

    }catch(err){
        console.log(err);
        
    }
}