// ejemplo para simular un CRUD
interface Estudiante{
    id: number;
    nombre:string
}

// creamos un arreglo vacio
let estudiantes:Estudiante[]=[];

// funcion para crear estudiantes
function crear_estudiante(alumno:Estudiante):void{
    estudiantes.push(alumno);
    console.log(`Alumno ${alumno.nombre} creado`); // ``sirven para concatenar 
}

// mostrar la lista de edtudiantes
function mostrar_estudiantes():void{
    console.log("Listado de estudiantes:",estudiantes)
}

//actualizar un estudiante
function actualizar_estudiante(id:number,nuevoNombre:string):void{
    const estudiante=estudiantes.find(alumno=>alumno.id===id);
    if(estudiante){
        estudiante.nombre=nuevoNombre;
        console.log("estudiante actualizado");
    }else{
        console.log("estudiante no encontrado")
    }
        
}

//eliminar un estudiante
function eliminar_estudiante(id:number):void{ //void porque no devuelve nada, es solo un proceso
    estudiantes= estudiantes.filter(alumno=>alumno.id!==id)
    console.log("estudiante eliminado")
}

// implementar la funcion
crear_estudiante({id:1,nombre:"Mario"})
crear_estudiante({id:2,nombre:"Rogelio"})
crear_estudiante({id:3,nombre:"Victor"})
mostrar_estudiantes();
//Editar
actualizar_estudiante(1,"Benjualian")
//eliminar
eliminar_estudiante(2)
mostrar_estudiantes()