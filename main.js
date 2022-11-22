let flip = document.getElementById("flip")
let coin = document.querySelector(".coins")
let head = document.getElementById("head")
let tail = document.getElementById("tail")

let hScore = 0
let tScore = 0

flip.addEventListener("click", ()=>{
    let toss = Math.floor(Math.random()*2)
    coin.style.animation = "none"
    if(toss==1){
        coin.style.animation = `spin-head 3s forwards`
        coin.addEventListener("animationend", ()=>{
            tScore++
            tail.textContent = tScore
        })
    }else{
        coin.style.animation = `spin-tail 3s forwards`
        coin.addEventListener("animationend", ()=>{
            hScore++
            head.textContent = hScore
        })
    }
})