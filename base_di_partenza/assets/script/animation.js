window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header")
    const button = document.querySelector("#nav > button")

    const heroSection = document.querySelector(".hero")

    if(window.scrollY > heroSection.offsetHeight){
        navbar.style.backgroundColor = "white"
        button.style.backgroundColor = "#1a8917"
        button.style.color = "white"
    }else{
        navbar.style.backgroundColor = "#ffc017"
        button.style.backgroundColor = "black"
        button.style.color = "white"
    }
})