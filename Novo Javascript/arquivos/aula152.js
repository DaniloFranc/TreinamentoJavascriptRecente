
const configdgv={
    endpoint:"http://127.0.0.1:1880/produto",
    idDestino:"dgvDados",
}

const dgv=(configdgv)=>{
    const dgvDados=document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML="";
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        // console.log(res)
        res.forEach(el => {
            const dvgLinha=document.createElement("div")
            dvgLinha.setAttribute("class","dgvLinha")

            const c1=document.createElement("div")
            c1.setAttribute("class","coluna c1")
            c1.innerHTML=el.n_id_produto
            dvgLinha.appendChild(c1)

            const c2=document.createElement("div")
            c2.setAttribute("class","coluna c2")
            c2.innerHTML=el.s_nome_produto
            dvgLinha.appendChild(c2)

            const c3=document.createElement("div")
            c3.setAttribute("class","coluna c3")
            c3.innerHTML=el.s_marca_produto
            dvgLinha.appendChild(c3)

            const c4=document.createElement("div")
            c4.setAttribute("class","coluna c4")
            c4.innerHTML=el.s_modelo_produto
            dvgLinha.appendChild(c4)

            const c5=document.createElement("div")
            c5.setAttribute("class","coluna c5")
            dvgLinha.appendChild(c5)

            const imgDelete=document.createElement("img")
            imgDelete.setAttribute("class","dgvIcone")
            imgDelete.setAttribute("src","trash.svg")
            imgDelete.addEventListener("click",(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML
                const linha=evt.target.parentNode.parentNode;
                const endpoint=`http://127.0.0.1:1880/removeproduto/${id}`;
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){
                        linha.remove();
                    }
                })
            })
            c5.appendChild(imgDelete)

            const imgEditar=document.createElement("img")
            imgEditar.setAttribute("class","dgvIcone")
            imgEditar.setAttribute("src","edit.svg")
            imgEditar.addEventListener("click",(evt)=>{

                document.querySelector("#janelaEditar").classList.remove("ocultar")
                
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint=`http://127.0.0.1:1880/produto/${id}`
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{

                    document.querySelector("#f_ideditar").value=res[0].n_id_produto
                    document.querySelector("#f_produtoeditar").value=res[0].s_nome_produto
                    document.querySelector("#f_marcaeditar").value=res[0].s_marca_produto
                    document.querySelector("#f_modeloeditar").value=res[0].s_modelo_produto

                })
            })
            c5.appendChild(imgEditar)

            const imgExibr=document.createElement("img")
            imgExibr.setAttribute("class","dgvIcone")
            imgExibr.setAttribute("src","eye.svg")
            imgExibr.addEventListener("click",(evt)=>{

                document.querySelector(".janelaView").classList.remove("ocultar")
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint=`http://127.0.0.1:1880/produto/${id}`
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{

                    document.querySelector("#f_id").value=res[0].n_id_produto
                    document.querySelector("#f_produto").value=res[0].s_nome_produto
                    document.querySelector("#f_marca").value=res[0].s_marca_produto
                    document.querySelector("#f_modelo").value=res[0].s_modelo_produto

                })

            })
            c5.appendChild(imgExibr)

            dgvDados.appendChild(dvgLinha);


        });
        
    })
}

dgv(configdgv);
document.querySelector("#btn_ok").addEventListener("click",(evt)=>{
    document.querySelector(".janelaView").classList.add("ocultar")
})
document.querySelector("#btn_gravar").addEventListener("click",(evt)=>{

    const id=document.querySelector("#f_ideditar").value
    const produto=document.querySelector("#f_produtoeditar").value
    const marca=document.querySelector("#f_marcaeditar").value
    const modelo=document.querySelector("#f_modeloeditar").value

    const endpoint=`http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaEditar").classList.add("ocultar")
            dgv(configdgv);
        }else{
            alert("Erro ao atualizar");
        }
    })
})

document.querySelector("#btn_cancelar").addEventListener("click",(evt)=>{
    document.querySelector("#janelaEditar").classList.add("ocultar")
})