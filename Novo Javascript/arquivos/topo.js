const body=document.body

const estilotopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #00f;"
const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style",estilotopo)
body.prepend(topo) // aqui ele adiciona no inicio diferente de appendChild que adiciona no final

const estilo_img_logo="width: 200px"
const logo=
    "<div id='logo' class='topo'>"+
        "<img src='logo.jpeg' title='CFBCursos' style='"+estilo_img_logo+"'/>"+
    "</div>"    
topo.innerHTML+=logo

const login=
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matricula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>"  

topo.innerHTML+=login