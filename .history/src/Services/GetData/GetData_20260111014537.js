import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("data.json")
co

    }catch(err){
        console.log(err);
        
    }
}