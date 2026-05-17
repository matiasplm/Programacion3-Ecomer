import type {Producto} from '../types/productos';
import type {Categoria} from '../types/categorias';

//array de productos
export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Haburgeuesa Mati",
        descripcion: "Hamburguesa doble carne con chedar y cebolla caramelizada",
        precio: 12000,
        imagenUrl:"/assets/img/burgermati.webp",
        categoria: "Hamburguesas"
    },

    {
        id: 2,
        nombre: "Hamburguesa Chedar",
        descripcion: "Hamburguesa con queso chedar, lechuga, tomate y cebolla",
        precio: 9000,
        imagenUrl: "/assets/img/hamburguesa-cheddar.jpg",
        categoria: "Hamburguesas"
    },

    {
        id: 3,
        nombre: "Hamburguesa Triple",
        descripcion: "Hamburguesa triple carne con chedar y cebolla caramelizada",
        precio: 15000,
        imagenUrl: "/assets/img/hamburguesaTriple.jpg",
        categoria: "Hamburguesas"
    },

    {
        id: 4,
        nombre: "Pizza Muza",
        descripcion: "Pizza con salsa de tomate, muzarela y albacae",
        precio: 17000,
        imagenUrl: "/assets/img/pizza.png",
        categoria: "Pizzas"
    },

    {
        id: 5,
        nombre: "Pizza Napolitana",
        descripcion: "Pizza con salsa de tomate, muzarela y albacae",
        precio: 18000,
        imagenUrl: "/assets/img/pizza-napolitana.jpg",
        categoria: "Pizzas"
    },

    {
        id: 6,
        nombre: "Pizza Fugazzeta",
        descripcion: "Pizza con salsa de tomate, muzarela y cebolla",
        precio: 19000,
        imagenUrl: "/assets/img/pizza-fuga.jpg",
        categoria: "Pizzas"
    },  

    {
        id: 7,
        nombre: "COCA COLA",
        descripcion: "Gaseosa de 500ml",
        precio: 2000,
        imagenUrl: "/assets/img/coca.png",
        categoria: "Bebidas"
    },

    {
        id: 8,
        nombre: "PEPSI",
        descripcion: "Gaseosa de 500ml",
        precio: 2000,
        imagenUrl: "/assets/img/pepsi.jpg",
        categoria: "Bebidas"
    },

    {
        id: 9,
        nombre: "SPRITE",
        descripcion: "Gaseosa de 500ml",
        precio: 2000,
        imagenUrl: "/assets/img/sprite.jpg",
        categoria: "Bebidas"
    },

    {
        id: 10,
        nombre: "AGUA MINERAL",
        descripcion: "Agua mineral de 500ml",
        precio: 1500,
        imagenUrl:"/assets/img/agua.jpg",
        categoria: "Bebidas"
    },

    {
        id: 11,
        nombre: "AGUA SABORIZADA",
        descripcion: "Agua saborizada de 500ml",
        precio: 1500,
        imagenUrl: "/assets/img/agua-saborizada.jpg",
        categoria: "Bebidas"
    },
];

//funcion para obtener las categorias a partir de los productos
export const categorias=(): Categoria[] => {
    const nombresCategorias = [...new Set(productos.map(producto => producto.categoria))];
    return nombresCategorias.map((nombre, index) => ({ 
        id: index + 1,
        nombre
    }));
}
