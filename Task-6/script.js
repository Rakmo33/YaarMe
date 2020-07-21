document.querySelector(".show-filters").addEventListener("click", function(){
    document.querySelector(".filters-wrapper").classList.toggle("visible")
    document.querySelector("main").classList.toggle("change-height")
})

document.querySelectorAll(".filters a").forEach(function(link){
    link.addEventListener("click",function(){

    document.querySelectorAll(".filters a").forEach(function(link){
        link.classList.remove("selected")
    });

        link.classList.add("selected")
    })
} )