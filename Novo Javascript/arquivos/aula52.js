const caixa=document.querySelector("#caixa")

let cursos=["HTML","CSS","Javascript"]


console.log(cursos[0])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})