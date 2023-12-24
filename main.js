function Get(id) {
    return document.getElementById(id)
}

let option = Get("menu-burger")
let tirer2 = document.querySelector(".tire-2")
let tirer3 = document.querySelector(".tire-3")

option.onmouseenter = ()=>{

    tirer2.classList.add("burger-hover")
    tirer3.classList.add("burger-hover")
    
}
option.onmouseleave = ()=>{
    tirer2.classList.remove("burger-hover")
    tirer3.classList.remove("burger-hover")
}
let myUl = Get("myUl")
option.onclick = ()=>{
    myUl.classList.toggle("ulDisplay")
    let myheader = Get("myheader")
    myheader.classList.toggle("headerHeight")
}

   window.onscroll = ()=>{
        let container2 = Get("container-2")
        console.log(window.scrollY);
        if (window.scrollY >= 200){
            container2.classList.add("displayContainer-2")
        }

        let testimonial = Get("testimonial")
        if (window.scrollY >= 5920){
            testimonial.classList.add("displayContainer-2")
        }

        let work = Get("work")
        let content = Get("content")
        if (window.scrollY >= 1880){
            work.classList.add("workLeft")
            content.classList.add("contentRight")
            
        }
    }