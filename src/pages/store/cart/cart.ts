import type {CarritoItem} from "../../../types/productos";

//Obtener elementos del DOM
const listaCarrito = document.getElementById("listaCarrito") as  HTMLElement;
const totalCarrito = document.getElementById("totalCarrito") as HTMLElement;

//Funcion para renderizar el carrito
const renderCarrito = () => {
    //Obtenemos el carrito del localStorage
    const carritoStorege = localStorage.getItem("carrito");
    const carrito: CarritoItem[] = carritoStorege ? JSON.parse(carritoStorege) : [];

    //Si el carrito esta vacio, mostramos un mensaje
    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío</p>";
        totalCarrito.textContent = "Total: $0";
        return;
    }

    //Renderizamos los items del carrito
    listaCarrito.innerHTML = carrito.map((item) => `
        <div class="carrito-item">
            <img src="${item.producto.imagenUrl}" alt="${item.producto.nombre}">
            <h3>${item.producto.nombre}</h3>
            <p>Precio: $${item.producto.precio.toFixed(2)}</p>
            <div class="cantidad-control">
                <button data-restar="${item.producto.id}">-</button>
                <span>${item.cantidad}</span>
                <button data-sumar="${item.producto.id}">+</button>
            </div>
            <p>Subtotal: $${(item.producto.precio * item.cantidad).toFixed(2)}</p>
            <button data-id="${item.producto.id}">Eliminar</button>
        </div>
    `).join("");

    //Evento para sumar cantidad
    listaCarrito.querySelectorAll("button[data-sumar]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.getAttribute("data-sumar"));
            sumarUnidad(id);
        });
    });

    //Evento para restar cantidad
    listaCarrito.querySelectorAll("button[data-restar]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.getAttribute("data-restar"));
            restarUnidad(id);
        });
    });

    //Evento para eliminar un item del carrito
    // Evento de cada botón eliminar
    listaCarrito.querySelectorAll("button[data-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.getAttribute("data-id"));
            eliminarCarrito(id);
        });
    });

    //Calculamos el total
    const total = carrito.reduce((acumulador, item) => {
    return acumulador + item.producto.precio * item.cantidad;
    }, 0);

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
};

//Funcion para sumar una unidad de un producto en el carrito
const sumarUnidad = (id: number) => {
    const carritoStorege = localStorage.getItem("carrito");
    const carrito: CarritoItem[] = carritoStorege ? JSON.parse(carritoStorege) : [];

    const item = carrito.find((item) => item.producto.id === id);
    if (item) {
        item.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderCarrito();
    }
};

//Funcion para restar una unidad de un producto en el carrito
const restarUnidad = (id: number) => {
    const carritoStorege = localStorage.getItem("carrito");
    const carrito: CarritoItem[] = carritoStorege ? JSON.parse(carritoStorege) : [];

    const item = carrito.find((item) => item.producto.id === id);
    if (item) {
        item.cantidad--;
        if (item.cantidad <= 0) {
            eliminarCarrito(id);
        } else {
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderCarrito();
        }
    }
};

const eliminarCarrito = (id:number) => {
    const carritoStorege = localStorage.getItem("carrito");
    const carrito: CarritoItem[] = carritoStorege ? JSON.parse(carritoStorege) : [];

    const nuevoCarrito = carrito.filter((item) => item.producto.id !== id);
    
    //Actualizamos el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    //Volvemos a renderizar el carrito
    renderCarrito();
};


    
renderCarrito();