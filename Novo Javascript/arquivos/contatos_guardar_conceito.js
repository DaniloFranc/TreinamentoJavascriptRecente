// contatos_guardar_conceito.js

import { contatos } from "./bancoContato_guardar_conceito.js";

let contato = {
  getTodosContatos: function () {
    return contatos
  },

  getContato: function (i_cont) {
    return contatos[i_cont]
  },

  addContato: function (novoContato, destinoDOM) {
    const cont = {
      nome: novoContato.nome,
      telefone: novoContato.telefone,
      email: novoContato.email
    };

    contatos.push(cont);

    destinoDOM.innerHTML = "";

    contatos.forEach((c) => {
      const div = document.createElement("div");
      div.setAttribute("class", "contato");
      const p_nome = document.createElement("p");
      p_nome.innerHTML = c.nome;
      const p_telefone = document.createElement("p");
      p_telefone.innerHTML = c.telefone;
      const p_email = document.createElement("p");
      p_email.innerHTML = c.email;

      // Adicionar identificador único ao contato
      div.dataset.nome = c.nome;

      div.appendChild(p_nome);
      div.appendChild(p_telefone);
      div.appendChild(p_email);
      destinoDOM.appendChild(div);
    });
    
  },

  removerContato: function (nomeContato) {

    for (let i = contatos.length - 1; i >= 0; i--) {
      if (contatos[i].nome === nomeContato) {
        contatos.splice(i, 1);
        listaContatos.removeChild(listaContatos.childNodes[i]);
      }
    }

  },

};

export default contato;


// import { contatos } from "./bancoContatos.js";

// class Contato {
    
//     getTodosContatos() {
//         return contatos;
//     }

//     getContato(i_cont) {
//         return contatos[i_cont];
//     }

//     addContato(novoContato, destinoDOM) {
//         const div = document.createElement("div");
//         div.setAttribute("class", "contato");
//         const p_nome = document.createElement("p");
//         p_nome.innerHTML = novoContato.nome;
//         const p_telefone = document.createElement("p");
//         p_telefone.innerHTML = novoContato.telefone;
//         const p_email = document.createElement("p");
//         p_email.innerHTML = novoContato.email;
//         div.appendChild(p_nome);
//         div.appendChild(p_telefone);
//         div.appendChild(p_email);
//         destinoDOM.appendChild(div);
//     }
// }

// const contato = new Contato();
// export default contato;
