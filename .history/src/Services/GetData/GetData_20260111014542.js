import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("data.json")
const data=

    }catch(err){
        console.log(err);
        
    }
}