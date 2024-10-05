const btn  = document.querySelector("button");
const one  = document.querySelector(".one");
const two  = document.querySelector(".two");
const h3 = document.querySelector("h3")

const joke = async() => {

 

    const responce = await fetch(`https://official-joke-api.appspot.com/random_joke`)
  

    const data = await responce.json();
    console.log(data)

    console.log(data.setup)
    console.log(data.punchline)

    one.innerHTML = data.setup;
    two.innerHTML = data.punchline;

}

btn.addEventListener("click",(e) => {
     h3.innerHTML="";
    joke();
    
})

