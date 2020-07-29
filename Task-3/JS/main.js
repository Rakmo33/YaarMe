var elem = document.getElementsByClassName("see-more");
for(var i = 0; i < elem.length; i++){
    elem[i].onclick = function(){
        if(this.innerHTML === "see less"){
            this.previousSibling.style.display = "none";
            this.innerHTML = "... see more";
        }
        else{
            this.previousSibling.style.display = "inline";
            this.innerHTML = "see less";
        }
    }
}


// Sidebar js

// sidebar open
document.querySelector(".mobile-header .me-icon").addEventListener("click", function (){
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    document.querySelector(".mobile-header").classList.add("filtered")
    document.querySelector(".mobile-nav-bar").classList.add("filtered")
    document.querySelector(".container-wrap").classList.add("filtered")
})

// sidebar close
document.querySelector(".container-wrap").addEventListener("click", function (){
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    sidebar.style.top = "";

    // unblur background
    document.querySelector(".mobile-header").classList.remove("filtered")
    document.querySelector(".mobile-nav-bar").classList.remove("filtered")
    document.querySelector(".container-wrap").classList.remove("filtered")
})


document.querySelector('.sidebar').addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

document.querySelector(".sidebar .down").addEventListener("click", function(){
    this.classList.toggle("rotate-arrow")
})

document.querySelector(".expand-add-acc").addEventListener("click",function(){
    document.querySelector(".all-uls").classList.toggle("show-add-acc")
    // document.querySelector(".hidden-hr-add-acc").classList.toggle("show-add-acc")
})

var sidebar = document.querySelector(".sidebar");

document.querySelector("body").addEventListener("touchstart", startTouch, false);
document.querySelector("body").addEventListener("touchmove", moveTouch, false);
document.querySelector(".sidebar").addEventListener("touchmove", moveTouch2, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
initialX = e.touches[0].clientX;
initialY = e.touches[0].clientY;
};

function moveTouch(e) {
if (initialX === null) {
return;
}

if (initialY === null) {
return;
}

var currentX = e.touches[0].clientX;
var currentY = e.touches[0].clientY;

var diffX = initialX - currentX;
var diffY = initialY - currentY;

if (Math.abs(diffX) > Math.abs(diffY)) {
// sliding horizontally
if (diffX > 0) {
// swiped left
sidebar.style.left = "";
sidebar.style.top = "";
 //un blur background
 document.querySelector(".mobile-header").classList.remove("filtered")
 document.querySelector(".mobile-nav-bar").classList.remove("filtered")
 document.querySelector(".container-wrap").classList.remove("filtered")
} else {
// swiped right
sidebar.style.left = 0;
sidebar.style.top = 0;

// blur background
document.querySelector(".mobile-header").classList.add("filtered")
document.querySelector(".mobile-nav-bar").classList.add("filtered")
document.querySelector(".container-wrap").classList.add("filtered")
}  
} else {
// sliding vertically
if (diffY > 0) {
// swiped up
} else {
// swiped down
}  
}

initialX = null;
initialY = null;

};

function moveTouch2(e) {
if (initialX === null) {
    return;
}

if (initialY === null) {
    return;
}

var currentX = e.touches[0].clientX;
var currentY = e.touches[0].clientY;

var diffX = initialX - currentX;
var diffY = initialY - currentY;


if (Math.abs(diffX) > Math.abs(diffY)) {
// sliding horizontally
if (diffX > 0) {
    // swiped left
    sidebar.style.left = "";
    sidebar.style.top = "";

    //un blur background
    document.querySelector(".mobile-header").classList.remove("filtered")
    document.querySelector(".mobile-nav-bar").classList.remove("filtered")
    document.querySelector(".container-wrap").classList.remove("filtered")
} else {
    // swiped right
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    document.querySelector(".mobile-header").classList.add("filtered")
    document.querySelector(".mobile-nav-bar").classList.add("filtered")
    document.querySelector(".container-wrap").classList.add("filtered")
}  
} else {

    // sliding vertically
    if (diffY > 0) {
    // swiped up
    // alert('asdas')
    sidebar.scroll({
        top: 500,
        // left: 100,
        behavior: 'smooth'
      })
    console.log("swiped up");
    } else {
    // swiped down
    sidebar.scroll({
        top: -100,
        // left: 100,
        behavior: 'smooth'
      })
    console.log("swiped down");
    }  

}
initialX = null;
initialY = null;

e.preventDefault();
}



