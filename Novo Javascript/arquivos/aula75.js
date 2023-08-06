const numero=document.getElementById("numero")



let promise=new Promise((resolve, reject)=>{
    let resultado=true
    let tempo=3000
    setTimeout(() => {
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            reject("Deu tudo errado")
        }        
    }, tempo);
})

promise.then((retorno)=>{ // "Deu certo"
    numero.innerHTML=retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
}) 

promise.catch((retorno)=>{ // "Deu errado"
    numero.innerHTML=retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
}) 

numero.innerHTML="Processando..."



// if(resultado){
//     numero.innerHTML="Deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// }else{
//     numero.innerHTML="Deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }

