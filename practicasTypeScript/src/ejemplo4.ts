
// INTERFACES
interface arreglosflorales{
    id:number;
    nombre:string;
    precio:number;
}

const articulos:arreglosflorales[]=[
    {id:1,nombre:"Girasol",precio:120},
    {id:2,nombre:"Lirios",precio:500},
    {id:3,nombre:"Rosas",precio:180},
    {id:4,nombre:"Tulipanes",precio:130},
    {id:5,nombre:"Margaritas",precio:160},
    {id:6,nombre:"Cactus",precio:230},
    {id:7,nombre:"Petunia",precio:190}
];

//metodo para calcular el total de los precios
function calcular_total(flores:arreglosflorales[]):number{
    return flores.reduce((total,f)=>total+f.precio,0);
}

console.log("Total de venta de arreglos",calcular_total(articulos));