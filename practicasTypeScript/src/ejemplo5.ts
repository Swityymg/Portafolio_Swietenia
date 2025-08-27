//crear interface
interface Estudiante {
    id:number;
    nombre:string;
    becado:boolean
}

// crear arreglo
const estudiantes:Estudiante[]=[
    {id: 1, nombre:"Fernando",becado:false},
    {id: 2, nombre:"Maria",becado:true},
    {id: 3, nombre:"Alexis",becado:true},
    {id: 4, nombre:"Salomon",becado:false}
]

//crear la funcion para buscar a estudiantes becados
function buscar_Becados(lista:Estudiante[]):Estudiante[]{
    return lista.filter(lista=>lista.becado);
}

//utilizar la funcion para mostrar la lista de becados
console.log(buscar_Becados(estudiantes))