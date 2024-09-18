import React,{useState,useEffect} from "react";


const DogPics=()=>{
        const [breed,setBreed]=useState("Random");
        const [dogImage, setDogImage]= useState(null);
        useEffect(()=>{
            fetchRandomDogImage();
        },[]);


        const fetchRandomDogImage=async ()=>{
            let apiURl= await fetch("https://dog.ceo/api/breeds/image/random");
            console.log(apiURl);
            if(breed !=="Random"){
                apiURl=`https://dog.ceo/api/breeds/${breed.toLowerCase()}image/random`;

            }
            try{
                const response=await apiURl.json();
                console.log(response)
                setDogImage(response.message)
            }catch(error){
                console.error("Error fetching dog images: ",error)
            }
        };
        const handleBreedChange=(event) => {
            setBreed(event.target.value);
            fetchRandomDogImage();
        };
        const handleNextButtonOnClick=() =>{
            fetchRandomDogImage();
        }
   
    return(
        <div>
            <div style={{margin: '10px'}}>
            <span>Select a breed:</span>
            <select  name={breed} onChange={handleBreedChange}>
                <option value="Random">Random</option>
                <option value="Beagle">Beagle</option>
                <option value="Damatian">Dalmatian</option>
                <option value="Husky">Husky</option>
            </select>
            </div>
           
            <div>
            <img src={dogImage} alt="Dog" style={{maxWidth: '300px'}}></img>
            </div>
           
            <div>
            <button onClick={handleNextButtonOnClick} >Next</button>
            </div>
            
        </div>
    )
}
export default DogPics;