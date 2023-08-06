const pessoa={
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "Javascript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"

    }


}

const s_json_pessoa=JSON.stringify(pessoa) // convete objeto em string JSON
const o_json_pessoa=JSON.parse(s_json_pessoa) // converte string JSON em Objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)