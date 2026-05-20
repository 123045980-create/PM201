const prompt = require("prompt-sync")();

let productos = [
{id:1, nombre:"Expresso", ingredientes:"Leche entera con café de grano molido veracruzano", precio:55},
{id:2, nombre:"Oatmeal Cookie", ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
{id:3, nombre:"Tea Green", ingredientes:"Té verde caliente endulzado con miel", precio:55},
{id:4, nombre:"Cheese Salad Sándwich", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con aguacate y lechuga", precio:55},
{id:5, nombre:"Chocolate Cupcake", ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez", precio:35}
];

const pedidos = [];
let total = 0;
let opcion = 0;
while(opcion !== 4){
    console.log(`

            CLIENTE
1. Consultar productos
2. Crear pedido
3. Listar pedidos
4. Salir
`);
    opcion = parseInt(prompt("Elige una opción: "));
    switch(opcion){

        case 1:
            console.log(`
 PRODUCTOS 
`);
            productos.forEach(producto => {
                console.log(`
ID: ${producto.id}

Producto: ${producto.nombre}

Ingredientes:
${producto.ingredientes}

Precio: $${producto.precio}

`);
            });

        break;
        case 2:
            let buscar = parseInt(prompt("Ingresa el ID del producto: "));
            let productoEncontrado = productos.find(
                producto => producto.id === buscar
            );
            if(productoEncontrado){

                let pedido = {

                    producto: productoEncontrado.nombre,

                    precio: productoEncontrado.precio
                };
                pedidos.push(pedido);
                total += productoEncontrado.precio;

                console.log(`
Pedido agregado correctamente

Producto: ${productoEncontrado.nombre}

Precio: $${productoEncontrado.precio}

Total acumulado: $${total}
`);
            }

            else{

                console.log("Producto no encontrado");
            }

        break;

        case 3:

            console.log(`
== PEDIDOS ==
`);

            pedidos.forEach((pedido, index) => {

                console.log(`
Pedido #${index + 1}

Producto: ${pedido.producto}

Precio: $${pedido.precio}


`);
            });

            console.log(`
TOTAL A PAGAR: $${total}
`);

        break;

        case 4:

            console.log("Saliendo del sistema...");
        break;


        default:

            console.log("Solo opciones del 1 al 4");
    }

}