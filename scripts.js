const slectGarely = document.querySelector("#mySelect")

function trocarGalery(){
    const containerImg = document.querySelector("#container1")
    const containerVd = document.querySelector("#container2")

    if (slectGarely.value === "div1"){
        containerImg.style.display = "block";
        containerVd.style.display = "none";
    }

    if(slectGarely.value === "div2") {
        containerImg.style.display = "none";
        containerVd.style.display = "block";
    }
}

slectGarely.addEventListener("change", trocarGalery)

