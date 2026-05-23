const prompt = require("prompt-sync")();
// productos
let productos = [
{
    nombre:"Expresso",
    categoria:"bebida",
    ingredientes:"Leche entera con café veracruzano",
    precio:55
},
{
    nombre:"Tea Green",
    categoria:"bebida",
    ingredientes:"Té verde caliente con miel",
    precio:55
},
{
    nombre:"Chocolate Cupcake",
    categoria:"postre",
    ingredientes:"Pan de chocolate con nuez",
    precio:35
},
{
    nombre:"Milkshake Oreo",
    categoria:"bebida",
    ingredientes:"Helado, Oreo y crema",
    precio:110
},
{
    nombre:"Hamburguesa Gourmet",
    categoria:"plato fuerte",
    ingredientes:"Doble carne y queso suizo",
    precio:190
}
];
//menu 

let menuDinamico = productos.map(producto => {

    return `
Producto: ${producto.nombre}
Categoria: ${producto.categoria}
Precio: $${producto.precio}
`;
});

console.log(`
== MENÚ  ==
`);
menuDinamico.forEach(menu => {

    console.log(menu);
});
//promos

let promociones = [
"2x1 en Expresso",
"20% en Tea Green",
"Cupcake gratis en compras mayores a $200"

];

console.log(`
=== PROMOCIONES ===
`);

promociones.forEach(promo => {

    console.log(` ${promo}`);
});

//disponibilidad de producto

console.log(`
=== PRODUCTOS DISPONIBLES ====
`);

productos.forEach(producto => {

    console.log(`
Nombre: ${producto.nombre}

Categoria: ${producto.categoria}

Ingredientes: ${producto.ingredientes}

Precio: $${producto.precio}


`);
});

let opcion = 0;

while(opcion !== 4){

    console.log(`
===== CLIENTE =====

1. Consultar productos
2. Crear pedido
3. Ver promociones
4. Salir
`);

    opcion = parseInt(prompt("Selecciona una opción: "));

    switch(opcion){

        case 1:

            console.log(`
===== PRODUCTOS =====
`);

            productos.forEach(producto => {

                console.log(`
Producto: ${producto.nombre}

Precio: $${producto.precio}
`);
            });

        break;


        case 2:

            let pedido = prompt(
                "Ingresa el nombre del producto: "
            );

            let encontrado = productos.find(
                producto =>
                producto.nombre.toLowerCase()
                === pedido.toLowerCase()
            );

            if(encontrado){

                console.log(`
Pedido agregado correctamente

Producto: ${encontrado.nombre}

Precio: $${encontrado.precio}
`);
            }

            else{

                console.log("Producto no encontrado");
            }

        break;


        case 3:

            console.log(`
===== PROMOCIONES =====
`);

            promociones.forEach(promo => {

                console.log(` ${promo}`);
            });

        break;


        case 4:

            console.log("gracias por comprar, hasta luego :)");
        break;


        default:

            console.log("Solo opciones válidas");
    }
}