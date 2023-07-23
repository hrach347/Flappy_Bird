if(window.innerHeight<675 || window.innerWidth < 700){
    document.body.style.display="none"
    alert("The game is not available on your device")
}
let gifs = ['imgs/bird.gif', 'imgs/bird2.gif', 'imgs/bird3.gif', 'imgs/bird4.gif']
let r = gifs[Math.floor(Math.random() * gifs.length)]
bird.style.backgroundImage = "url('" + r + "')"
bird.style.left="400px"
let fi;
let ji;
let fly;
let i = 100
let visual
let visual2
let vh
let arr = []
let plat
let po = 0
let lc = 0
let iMP
let iCP
let cT
let dead = false
class Plat {
    constructor(lol) {
        this.left = lol
        this.h = Math.round(Math.random() * -400)
        this.h2 = this.h + 700
        this.heg = 500
        this.visual = document.createElement("div")
        this.visual2 = document.createElement("div")
        visual = this.visual
        visual2 = this.visual2
        visual.id = "v"
        visual2.id = "v2"
        visual.style.position = "absolute"
        visual.style.width = "220px"
        visual.style.height = this.heg + "px"
        visual.style.top = this.h + "px"
        visual.style.backgroundImage = "url('imgs/platt.png')"
        visual.style.backgroundSize = "cover"
        visual.style.backgroundRepeat = "no-repeat"
        visual.style.transform = "rotateZ(180deg)"
        visual2.style.position = "absolute"
        visual2.style.width = "220px"
        visual2.style.top = this.h2 + "px"
        visual2.style.height = this.heg + "px"
        visual2.style.backgroundImage = "url('imgs/platt.png')"
        visual2.style.backgroundSize = "cover"
        visual2.style.backgroundRepeat = "no-repeat"
        // visual2.style.borderBottom=window.innerHeight+"px solid green"
        this.vh = document.createElement("div")
        vh = this.vh
        vh.id = "vh"
        vh.style.display = "inline-block"
        vh.style.position = "absolute"
        vh.style.left = this.left + "px"
        vh.appendChild(visual)
        vh.appendChild(visual2)
        grid.appendChild(vh)
    }
}
let cd = 3
let iCD = setInterval(function(){
cd--
countdown.innerText="COUNTDOWN : "+cd+"s"
if(cd < 0){
    countdown.style.color="yellow"
    countdown.style.fontSize="70px"
    countdown.innerText="READY GO !"
}
},1000)
setTimeout(function(){
clearInterval(iCD)
countdown.parentElement.removeChild(countdown)
},5000)
function cP() {
    let i = 0
    let leftt = window.innerWidth + i * 200
    plat = new Plat(leftt)
    arr.push(plat)
}
iCP = setInterval(function () {
    cP()
}, 3500)
function moveP() {
    iMP = setInterval(function () {
        let i = 0
        while (i < arr.length) {
            arr[i].left -= 1
            arr[i].vh.style.left = arr[i].left + "px"
            // arr[i].visual2.style.left = arr[i].left + "px"
            if (arr[0].left <= -100) {
                arr[0].vh.style.display = "none"
                arr[0].vh.parentElement.removeChild(arr[0].vh)
                arr.shift()
            }
            i++
        }
        arr.forEach(function (p) {
            // if(dead == false){
            if (parseInt(bird.style.top,10)<=arr[0].h+arr[0].heg-50 && parseInt(bird.style.left,10)+80 >= parseInt(p.vh.style.left,10) && parseInt(bird.style.left,10) <= parseInt(p.vh.style.left,10)+200) {
                die()
            }
            if(parseInt(bird.style.top,10)+50>=parseInt(arr[0].visual2.style.top+arr[0].h2,10)&& parseInt(bird.style.left,10)+80 >= parseInt(p.vh.style.left,10) && parseInt(bird.style.left,10) <= parseInt(p.vh.style.left,10)+200){              
                die() 
            }
        // }
        }) 
    
    }, 1)
}
moveP()
function fall() {
    fly = false
    bird.style.transform = "rotateZ(0deg)"
    fi = setInterval(function () {
        bird.style.top = i + "px"
        i += 1.5
        if (i >= window.innerHeight-100) {
            die()
        }
    }, 1)

}
fall()

function jump() {
    if(fly==false){
    fly = true
    bird.style.transform = "rotateZ(-25deg)"
    clearInterval(fi)
    ji = setInterval(function () {
        i -= 4
        bird.style.top = i + "px"
        if (bird.style.top <= 0 + "px") {
            i = 0
        }
    }, 1)
    setTimeout(function () {
        clearInterval(ji)
        fall()
    }, 120)
}
}
document.addEventListener("keydown", function (k) {
    if (dead == false) {
        if (k.key == " ") {
            jump()
        }
    }

})
document.addEventListener('click',function(){
    if (dead == false) {
            jump()
    }
})
// document.addEventListener('mousemove',function(e){
//  bird.style.left=e.clientX+"px"
//  bird.style.top= e.clientY+"px"  
// })
cT = setInterval(function () {
    arr.forEach(function (p) {
        if (400 + "px" == p.vh.style.left) {
            po += 1
            points.innerText = "POINTS: " + po
            if(po==5){
                points.style.color="yellow"
            }
            if(po==10){
                points.style.color="lime"
            }
            if(po==30){
                points.style.color="cyan"
            }
        }
    })
}, 1)



function die() {
    if(dead==false){
    if(typeof countdown !== "undefined"){
      countdown.style.display="none"
    }
    dead = true
    bird.style.backgroundImage = "url('imgs/death.gif')"
    clearInterval(fi)
    clearInterval(iCP)
    clearInterval(iMP)
    let d = document.createElement('div')
    d.id = "d"
    d.innerText = "GAME OVER"
    let h = document.createElement('h1')
    h.id = "h"
    h.innerText = "SCORE - " + po
    let b = document.createElement('button')
    b.id = "b"
    b.innerText = "PLAY AGAIN"
    b.onclick = function () {
        location.reload()
    }
    let ch = document.createElement("h1")
    ch.id="ch"
    ch.innerText="CREATOR - HRACH347"
    d.appendChild(h)
    d.appendChild(b)
    d.appendChild(ch)
    grid.appendChild(d)
}
}
