const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")
const btn_texto=document.getElementById("btn_texto")

const obterDados=()=>{
    const endpoint="https://cfbcursos--danilofranco1.repl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nível: " + dados.nivel
        p_press.innerHTML="Pressão: " + dados.pressao
    })
}

// let intervalo=setInterval(obterDados, 1000)

let dados={
    nome:"Bruno",
    canal:"CFBCursos",
    cursos:"Javascript"
}

let cabecalho={
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://cfbcursos--danilofranco1.repl.co/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json)
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})