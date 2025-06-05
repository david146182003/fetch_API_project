

const API_key ="live_p21Nx9H3hwYXJy56fUAVVM6OPrgNiEVUoEhP8arnWMRYurOgAoQn7y2TXc0pHKXI";
const divEl = document.querySelector("div")
const fetchData = async()=>{
    const resopnse = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_p21Nx9H3hwYXJy56fUAVVM6OPrgNiEVUoEhP8arnWMRYurOgAoQn7y2TXc0pHKXI");
    const dataImg = await resopnse.json();
    console.log(dataImg)
    dataImg.forEach(breed =>{
        const img = document.createElement("img");
        img.setAttribute("src", breed.img)
        divEl.appendChild(img)
        
    })
    
    
}
fetchData()