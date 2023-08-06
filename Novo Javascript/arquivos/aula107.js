const carro=document.getElementById("carro")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")

const init=()=>{
    // carro.style.position="relative"
    // carro.style.left="0px"
    carro.style="position:relative;left:0px";
}

btn_esquerda.addEventListener("click",()=>{

    carro.style.left=parseInt(carro.style.left) - 10 + "px"
    // console.log(carro.style.left)

})

btn_direita.addEventListener("click",()=>{

    let pos=parseInt(carro.style.left);
    pos+=10
    carro.style=`position:relative;left:${pos}px`
    // console.log(pos)

})


window.onload=init
// window.addEventListener("load",init())