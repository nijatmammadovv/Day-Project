let btn = document.querySelectorAll(".portfolio");
let boxes = document.querySelectorAll(".box");
let btn1 = document.querySelector(".all");

btn.forEach(x => {
    x.addEventListener("click", function () {
        let btnid = x.getAttribute("data-target");
        boxes.forEach(y => {
            let imgsid = y.getAttribute("data-id");

        if (btnid == imgsid) {
            y.style.display="block"
        }
        else {
            y.style.display = "none";
        }
        })
    }
    )
})

btn1.addEventListener("click", function () {
    boxes.forEach(y => {
        y.style.display = "block";
    })
})

