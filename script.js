
import { vaildation } from "./vaildation.js";
const API_key ="live_p21Nx9H3hwYXJy56fUAVVM6OPrgNiEVUoEhP8arnWMRYurOgAoQn7y2TXc0pHKXI";
const divEl = document.querySelector("div");
const catSelectEl = document.getElementById("catSelect");
const imgEl = document.getElementById("catImg");
export const imgInputEl = document.querySelector("#imgInput");
const btn = document.getElementById("btn")
const infoEl = document.getElementById("divInfo")
const infoCon= document.querySelector(".infocontainer")


const fetchData = async()=>{

    const resopnse = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await resopnse.json();
    console.log(data);
    
    data.forEach(breed =>{
      
        const createOption = document.createElement("option");
        createOption.textContent = breed.name;
        catSelectEl.appendChild(createOption);
      
    })
}
fetchData()

const getImage = async(breedId)=>{
    const resopnse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${API_key}`);
    const img = await resopnse.json();
    console.log(img)
    imgEl.setAttribute("src", img[0].url)
    
}
//setTimeout
setTimeout(vaildation, 2000);

catSelectEl.addEventListener('change', (e)=>{
    const selectBreedId = e.target.value;
    console.log(e.target.value)
    getImage(selectBreedId)
})


btn.addEventListener("click", async()=>{
    vaildation()
    const inputBreed = imgInputEl.value;
    console.log(inputBreed)
    const resopnse = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await resopnse.json();
    const createLi = document.createElement('p')
    for(let breed of data){
        if(inputBreed === breed.name){
            createLi.textContent = `Orgin: ${breed.orgin}`;
            infoEl.appendChild(createLi);
            body.appendChild(infoEl);
        }
    }
})



 