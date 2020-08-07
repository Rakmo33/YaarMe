var inputBox = document.querySelector(".msg-form input");
var inputButtons = document.querySelectorAll(".msg-form .other-btns");
var inputBar = document.querySelector(".input-bar");
var inputForm = document.querySelector(".msg-form");

inputBox.oninput = function(){
    if(inputBox.value){
       document.getElementById("camera-btn").setAttribute("src","SVG/smile-solid.svg");
       inputButtons.forEach(function(btn){
           btn.style.display = "none";
       });
       inputBar.style.gridTemplateColumns = "50px 1fr 55px";
       document.querySelector(".send-btn").style.display = "block"
    }

    else{
        document.getElementById("camera-btn").setAttribute("src","SVG/camera-solid.svg");
        inputBar.style.gridTemplateColumns = "50px 1fr 45px 45px 45px";
        inputButtons.forEach(function(btn){
            btn.style.display = "flex";            
        });
        document.querySelector(".send-btn").style.display = "none";
    }
}

var sendBtn = document.querySelector(".send-btn");

inputForm.addEventListener("submit", function (e){
    e.preventDefault();

    var msg = inputBox.value;
    inputBox.value = "";

    setTimeout(function(){
        document.querySelector(".right .right-ul").innerHTML += 
        `<li><p>` + msg
        var last = document.querySelector("main");
        last.scrollTop = last.scrollHeight;
    },300)

  

    
});