

const API_key ="live_p21Nx9H3hwYXJy56fUAVVM6OPrgNiEVUoEhP8arnWMRYurOgAoQn7y2TXc0pHKXI";
const divEl = document.querySelector("div");
const catSelectEl = document.getElementById("catSelect");
const imgEl = document.getElementById("catImg")

const fetchData = async()=>{
    const resopnse = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await resopnse.json();
    console.log(data)
    
    data.forEach(breed =>{
        const createOption = document.createElement("option");
        createOption.textContent = breed.name;
        catSelectEl.appendChild(createOption)
        
        
        // breed.addEvenLister('click', ()=>{
            
        // })
    })
}
fetchData()

const getImage = async(breedId)=>{
    const resopnse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${API_key}`);
    const img = await resopnse.json();
    console.log(img)
    imgEl.setAttribute("src", img[0].url)
    
}

catSelectEl.addEventListener('change', (e)=>{
    const selectBreedId = e.target.value;
    console.log(e.target.value)
    getImage(selectBreedId)
})