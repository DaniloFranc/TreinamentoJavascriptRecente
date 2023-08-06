const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    window.location=url.value
})