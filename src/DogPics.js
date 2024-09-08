import React,{useState} from "react";
function DogPics(){
    
    const images=async(id)=>{
        const response=await fetch(`https://dog.ceo/api/breeds/image/+${id}`);
        const data=await response.json();
        return data;
    }
   
    return(
        <div>
            <span>Select a breed:</span>
            <select  name="breed">
                <option value="Random">Random</option>
                <option value="Beagle">Beagle</option>
                <option value="Damatian">Dalmatian</option>
                <option value="Husky">Husky</option>
            </select>
            <div>
            <button onClick={images}>Next</button>
            </div>
            
        </div>
    )
}
export default DogPics;