# <img src="https://bignews.ar/wp-content/uploads/2023/05/utn-nacional.jpg" width="200">
# Examen Parcial I – Programación III

> Este repositorio contiene el **Examen Parcial** de la materia **Programación III (UTN)**.
> Incluye una aplicación frontend completa con autenticación, catálogo de productos y carrito de compras.

## 🎥 Video de presentación

> 📹 **Link al video:** https://drive.google.com/drive/folders/1wEev1lRMZnkAVLoG7t_MeIVfGl-2q42l?usp=sharing

---

## 📁 Estructura del proyecto

```plaintext
/
├── public/
│   └── assets/
│       └── img/              # Imágenes de los productos
├── src/
│   ├── pages/
│   │   ├── admin/            # Páginas solo para administradores
│   │   ├── auth/             # Login y registro
│   │   ├── client/           # Páginas solo para clientes
│   │   └── store/
│   │       ├── home/         # Catálogo de productos
│   │       └── cart/         # Carrito de compras
│   ├── data/
│   │   └── data.ts           # Array de productos y función de categorías
│   ├── types/
│   │   ├── productos.ts      # Interfaces Producto y CarritoItem
│   │   ├── categorias.ts     # Interface Categoria
│   │   ├── IUser.ts          # Interface IUser
│   │   └── Rol.ts            # Tipo Rol
│   └── utils/
│       ├── auth.ts           # Guard de rutas y logout
│       ├── localStorage.ts   # Funciones para leer/escribir en localStorage
│       └── navigate.ts       # Función para redirigir al usuario
├── main.ts                   # Guard central de rutas
├── package.json
└── README.md                 # Este archivo
```

---

## ⚙️ Tecnologías utilizadas

- **Lenguaje:** TypeScript
- **Bundler:** Vite
- **Almacenamiento:** localStorage
- **Estilos:** CSS3
- **Herramientas:** Visual Studio Code / pnpm

---

## 🚀 Instalación y Uso

### 1. Instalar pnpm

```bash
npm install -g pnpm
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar el proyecto

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## ⚙️ Funcionalidades

### 🔐 Autenticación y Roles
- Registro de usuarios con email y contraseña
- Login con verificación de credenciales contra `localStorage`
- Protección de rutas según el rol del usuario (`admin` o `client`)
- Cierre de sesión (logout)

### 🛍️ Catálogo de Productos
- Renderizado dinámico de productos desde un array de datos
- Búsqueda de productos por nombre en tiempo real
- Filtrado de productos por categoría

### 🛒 Carrito de Compras
- Agregar productos al carrito desde el catálogo
- Visualizar nombre, precio y cantidad de cada producto
- Sumar y restar unidades de cada producto
- Eliminar productos del carrito
- Calcular y mostrar el total de la compra
- Persistencia del carrito en `localStorage`

---

## 🤝 Integrantes

| Nombre | Rol / Aporte |
|--------|--------------|
| **Leandro Matias Perez** | Desarrollo completo |
| **Comisión:5** 

---

## 📄 Licencia y uso

Proyecto académico para la **Universidad Tecnológica Nacional**
Materia: **Programación III**
Año: **2026**

Este material se distribuye con fines educativos.