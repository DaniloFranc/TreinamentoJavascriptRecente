const valor1=document.querySelector('#valor1')
const valor2=document.querySelector('#valor2')
const btn_soma = document.querySelector('#soma');
const btn_sub = document.querySelector('#sub');
const btn_multi = document.querySelector('#multi');
const btn_divis = document.querySelector('#divis');
const resultado = document.querySelector('#resultado');



let a=[]


console.log(valor1)
console.log(valor2)
console.log(a)


btn_soma.addEventListener("click", (evt) => {

    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
  
    const a = [valor2, valor1];
    
    const soma = a.reduce((anterior, atual) => {
      return parseInt(atual) + parseInt(anterior);
    });
    resultado.innerHTML = soma;

  });

btn_sub.addEventListener("click", (evt) => {

    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
  
    const a = [valor2, valor1];
    
    const sub = a.reduce((anterior, atual) => {
      return parseInt(atual) - parseInt(anterior);
    });
    resultado.innerHTML = sub;
    
  });

btn_multi.addEventListener("click", (evt) => {

    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
  
    const a = [valor2, valor1];
    
    const multi = a.reduce((anterior, atual) => {
      return parseInt(atual)*parseInt(anterior);
    });
    resultado.innerHTML = multi;
    
  });

btn_divis.addEventListener("click", (evt) => {

    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
  
    const a = [valor2, valor1];
    
    const divis = a.reduce((anterior, atual) => {
      return parseInt(atual)/ parseInt(anterior);
    });
    resultado.innerHTML = divis;
    
  });

  




