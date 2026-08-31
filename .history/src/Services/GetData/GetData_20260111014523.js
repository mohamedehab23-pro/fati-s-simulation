import axios from "axios";

export async function GetData(){
    try{
const response=await axios.get("./da")

    }catch(err){
        console.log(err);
        
    }
}