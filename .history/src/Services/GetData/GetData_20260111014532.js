import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("data.json")

    }catch(err){
        console.log(err);
        
    }
}