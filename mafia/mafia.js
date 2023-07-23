let arr = []
function fill() {
    let reds = parseInt(cr.value)
    let blacks = parseInt(cb.value)
    if (reds + blacks > 3) {
        if (blacks < reds) {
            let i = 0
            while (i < reds) {
                arr.push("img/djack.jpg")
                i++
            }
            let k = 0
            while (k < blacks) {
                arr.push("img/sjack.jpg")
                k++
            }

            let j = 0
            while (j < arr.length) {
                if (arr[j] == "img/djack.jpg") {
                    arr[j] = "img/aceofdiamonds.jpg"
                    break
                }
                j++
            }

            let h = 0
            while (h < arr.length) {
                if (arr[h] == "img/sjack.jpg") {
                    arr[h] = "img/aceofspades.jpg"
                    break
                }
                h++
            }
            console.log(arr)
            mafia.style.display = "none"
            hanger.style.display = "none"
            charHolder.style.display = "flex"
            document.body.style.backgroundImage="none"
            document.body.style.background = "black"
        }
    }
}
let randChar
function openn() {
    char.onclick = function () {
        closs()
    }
    an()
    if (arr.length != 0) {
        randChar = Math.floor(Math.random() * arr.length)
        char.style.backgroundImage = "url('" + arr[randChar] + "')"
        arr.splice(randChar, 1)
    }
    else {
        mafia.style.marginTop = "200px"
        mafia.style.display = "block"
        charHolder.style.display = "none"
        setTimeout(function () {
            mafia.style.animation = "anim"
            mafia.style.animationDuration = "2s"
            mafia.style.animationIterationCount = "infinite"
            mafia.onclick = function () {
                location.reload()
            }
            mafia.style.cursor = "pointer"
        }, 1000)
    }
}

function closs() {
    char.onclick = function () {
        openn()
    }
    an()
    char.style.backgroundImage = "url('img/card.png')"
    if (arr.length == 0) {
        mafia.style.marginTop = "200px"
        mafia.style.display = "block"
        charHolder.style.display = "none"
        setTimeout(function () {
            document.body.style.background = "black"
            mafia.style.animation = "anim"
            mafia.style.animationDuration = "2s"
            mafia.style.animationIterationCount = "infinite"
            mafia.onclick = function () {
                location.reload()
            }
            mafia.style.cursor = "pointer"
        }, 1000)
    }
}

function an(){
    let i = 0
    let si = setInterval(function(){
        i+=3
        char.style.transform="rotateY("+i+"deg"+")"
        if(i>=360){
            clearInterval(si)
        }
    },1)
}