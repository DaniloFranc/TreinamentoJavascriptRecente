const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")

const data=new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()+1
mes=mes<10?"0"+mes:mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data_r

let minuto
let segundo


const relogio=()=>{

    const data=new Date()

    let hora=data.getHours()
    hora=hora<10? "0"+hora:hora;

    let minuto=data.getMinutes();
    minuto=minuto<10?"0"+minuto:minuto;

    let segundo=data.getSeconds();
    segundo=segundo<10?"0"+segundo:segundo;

    const hora_completa=hora+":"+minuto+":"+segundo;

    div_relogio.innerHTML=hora_completa;
}

const intervalo=setInterval(relogio,1000)