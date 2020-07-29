document.querySelectorAll("nav li").forEach(function (li) {

    li.addEventListener("click", function () {

        document.querySelectorAll("nav li").forEach(function (list) {
            list.classList.remove("selected-nav");
        })

        if (!li.classList.contains("premium-nav"))
            li.classList.add("selected-nav")


    })
})

document.querySelectorAll("footer li").forEach(function (li) {

    li.addEventListener("click", function () {

        document.querySelectorAll("footer li").forEach(function (list) {
            list.classList.remove("selected-nav2");
        })

        li.classList.add("selected-nav2")


    })
})


document.querySelectorAll(".post-follow").forEach(function (btn) {
    btn.addEventListener("click", function () {

        if (btn.classList.contains("follow")) {
            // alert("LOL")
            btn.innerHTML = '<i class="fas fa-check"></i>&nbsp FOLLOWING';
            btn.classList.toggle("follow")
            btn.classList.toggle("following")
        } else if (btn.classList.contains("following")) {
            btn.innerHTML = '<i class="fas fa-plus"></i> &nbsp FOLLOW</a>';
            btn.classList.toggle("follow")
            btn.classList.toggle("following")
        }

    })
})