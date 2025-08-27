interface Frase{
    id: number;
    descripcion:string;
    autor: string;
}

async function obtener_frases(): Promise<Frase[]> {
    const respuesta =await fetch ("https://dummyjson.com/quotes");
    if (!respuesta.ok){
        throw new Error("error en la peticion de datos")
    }
    const datos:Frase[]=await respuesta.json();
    //verificamos que solo se obtengan las frases de la api
    if(Array.isArray((datos as any).quotes)){
        return (datos as any).quotes as Frase[]
    }
    throw new Error("Formato incorrecto de la api")
}

obtener_frases().then(frases=>{
    console.log(frases.slice(0,29));
});
