let nome = new String("Bruno Pinho Campos")
let nome2=new String("Bruno Pinho Campos")
let nome3=new String(nome.toLocaleUpperCase())
let canal= new String("CFBCursos")


console.log(nome)
console.log(typeof(nome))


console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))
console.log(nome)

console.log(nome.indexOf('u'))

console.log(nome.lastIndexOf('a'))

console.log(nome==nome2)

console.log(nome.localeCompare(nome2))

console.log(nome.replace("Pinho","Teste"))

console.log(nome.search("Pinho"))

let sobrenome=nome.slice(6,11)
console.log(sobrenome)

let arr_nome=nome.split(" ") //faz o recorte aonde tem a expressão indicada no método
console.log(arr_nome)

let parte1 = nome.substring(6,11)
console.log(parte1)

let parte2= nome.substr(6,5)
console.log(parte2)

console.log(nome.toUpperCase())
console.log(nome)
console.log(nome.toLocaleLowerCase())
console.log(nome)

console.log(nome3.toLowerCase())
console.log(nome3.toLocaleLowerCase())
console.log(nome.valueOf())

let num=0
console.log(typeof(num.toString()))