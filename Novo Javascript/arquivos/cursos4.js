class Cursos{

    static cursos=["Javascript","HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"]
    
    constructor(){}

    static getTodosCursos=()=>{ // static para chamar sem ter que instânciar a classe
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    
    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos

