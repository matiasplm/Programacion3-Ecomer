//Importamos
import type { Producto } from "../../../types/productos";
import type { CarritoItem } from "../../../types/productos";
import type { Categoria } from "../../../types/categorias";
import { categorias, productos} from "../../../data/data";

//Obtenemos los elementos del DOM
const listaCategorias = document.getElementById("listaCategorias") as unknown as HTMLElement;
const listaProductos = document.getElementById("listaProductos") as unknown as HTMLElement;
const inputBuscar = document.getElementById("inputBuscar") as unknown as HTMLInputElement;

//Variable para almacenar las categorias seleccionadas
let categoriasSeleccionadas: string | null = null;

//RENDERIZAMOS LAS CATEGORIAS
const renderCategorias = () => {
    //Obtenemos las categorias desde el data.ts
    const cats : Categoria[] = categorias();

    //agregamos un boton para mostrar todos los productos
    listaCategorias.innerHTML=`<li><button id="btnTodas">Todas</button></li>`;

    //craemos un boton para cada categoria
    cats.forEach((cats) => {
        const li = document.createElement("li");
        li.innerHTML = `<button data-categoria="${cats.nombre}">${cats.nombre}</button>`;
        listaCategorias.appendChild(li);
    });
    
    //Agregamos los event listeners a los botones de categoria
    document.getElementById("btnTodas")?.addEventListener("click", () => {
        categoriasSeleccionadas = null;
        renderProductos();
    });

    //Agregamos los event listeners a los botones de categoria
    listaCategorias.querySelectorAll("button[data-categoria]").forEach((button) => {
        button.addEventListener("click", () => {
            categoriasSeleccionadas = button.getAttribute("data-categoria");
            renderProductos();
        });
    });

};

//RENDERIZAMOS LOS PRODUCTOS
const renderProductos = () => {
    //Obtenemos el texto del buscador
    const textoBusqueda = inputBuscar.value.toLowerCase().trim();

    //filtramos los productos por categoria y por texto de busqueda
    const productosFiltrados = productos.filter((producto) => {
        const coincideCategoria = categoriasSeleccionadas ? producto.categoria === categoriasSeleccionadas : true;
        const coincideBusqueda = producto.nombre.toLowerCase().includes(textoBusqueda);

        //si el producto coincide con la categoria seleccionada y con el texto de busqueda, lo mostramos
        return coincideCategoria && coincideBusqueda;
    });

    //si no hay productos que coincidan con la busqueda, mostramos un mensaje
    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = "<p>No se encontraron productos que coincidan con la búsqueda.</p>";
        return;
    }

    //por cada producto filtrado, creamos una tarjeta y la agregamos al DOM
    listaProductos.innerHTML = productosFiltrados.map((producto) => `
        <div class="producto-card">
            <img src="${producto.imagenUrl}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        </div>
    `).join("");    

    //evento boton agregar al carrito
    listaProductos.querySelectorAll("button[data-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const idProducto = parseInt(button.getAttribute("data-id") || "0");
            const productoSeleccionado = productos.find((producto) => producto.id === idProducto);
            if (productoSeleccionado) {
                agregarCarrito(productoSeleccionado);
            }
        });
    });
};

//FUNCION PARA AGREGAR AL CARRITO
const agregarCarrito = (producto: Producto) => {
    //obtenemos el carrito del localStorage
    const carritoStorege = localStorage.getItem("carrito");
    const carrito: CarritoItem[] = carritoStorege ? JSON.parse(carritoStorege) : [];

    //verificamos si el producto ya esta en el carrito
    const itemExistente = carrito.find((item) => item.producto.id === producto.id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ producto, cantidad: 1 });
    }   

    //guardamos el carrito actualizado en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Producto "${producto.nombre}" agregado al carrito.`);    
};


inputBuscar.addEventListener("input", () => {
    renderProductos();
});

renderCategorias();
renderProductos();

