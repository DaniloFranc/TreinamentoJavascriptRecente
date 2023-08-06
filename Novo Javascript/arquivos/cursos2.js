const cursos=["Javascript","HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"]


// const getTodosCursos=()=>{
//     return cursos
// }

export default function getTodosCursos(){ // só posso ter apenas 1 export default, apenas 1 método como padrão
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}


export{cursos, getCurso}
// export default getTodosCursos