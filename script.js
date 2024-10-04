
const input  = document.querySelector("#input");
const btn  = document.querySelector("button");
const one  = document.querySelector(".one");
const two  = document.querySelector(".two");

const getReceipe = async() => {

 

    const responce = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    const data = await responce.json();
    console.log(data)
    setTimeout(()=>{
    console.log(data.setup)
    console.log(data.punchline)
},3000)
    one.innerHTML = data.setup;
    two.innerHTML = data.punchline;

}

btn.addEventListener("click",(e) => {
    getReceipe();
})
