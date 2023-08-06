import { Cxmsg } from "./cxmsg02.js"

const config={
    cor: "#48f",
    tipo: "sn", //tipos: ok, sn,
    textos:["Sim","Não"],
    comando_sn:()=>{} 

}

const fsim=()=>{
    console.log("Botão SIM pressionado")
}



config.tipo="ok"
const btn_mostrarcxmsg=document.querySelector("#btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.querySelector("#btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostrar(config,"CBF Cursos","Curso de Javascript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"Youtube","Canal com cursos de programação")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["OK","Cancela"]
    Cxmsg.mostrar(config,"Javascript","Aula 136")
})

