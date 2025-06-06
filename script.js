

const API_key ="live_p21Nx9H3hwYXJy56fUAVVM6OPrgNiEVUoEhP8arnWMRYurOgAoQn7y2TXc0pHKXI";
const divEl = document.querySelector("div");
const catSelectEl = document.getElementById("catSelect");
const imgListEl = document.getElementById("imgList")

const fetchData = async()=>{
    const resopnse = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await resopnse.json();
    console.log(data)
    data.forEach(breed =>{
        const option = document.createElement("option");
        option.textContent = breed.name;
        catSelectEl.appendChild(option)
    })
}
fetchData()

const getImage = async()=>{
    const resopnse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${API_key}`);
    const img = await resopnse.json();
    console.log(img)
    img.forEach(img =>{
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', img.url)
    })
    console.log(img)
}
getImage()