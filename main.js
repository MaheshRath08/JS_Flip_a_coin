let flip = document.getElementById("flip")
let coin = document.querySelector(".coins")

flip.addEventListener("click", ()=>{
    let toss = Math.floor(Math.random()*2)
    coin.style.animation = "none"
    if(toss==1){
        coin.style.animation = `spin-head 3s forwards`
    }else{
        coin.style.animation = `spin-tail 3s forwards`
    }
})