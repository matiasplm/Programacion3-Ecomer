//interface para el producto
export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    imagenUrl: string;
}   

//interface para el item del carrito
export interface CarritoItem {
    producto: Producto;
    cantidad: number;
}