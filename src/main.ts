///Importacion de tipos y funciones 
import type { IUser } from "./types/IUser";
import { getUSer } from "./utils/localStorage";
import { navigate } from "./utils/navigate";

const checkRoute = () => {
    const rutaActual = window.location.pathname;
    const userStore = getUSer();

    // Si la ruta es de auth (login/registro) la dejamos pasar
    if (rutaActual.includes("/auth/")) {
        return;
    }

    // Si la ruta es de store la dejamos pasar para todos los usuarios logueados
    if (rutaActual.includes("/store/")) {
    // Pero si no hay sesión, mandamos al login
        if (!userStore) {
            navigate("/src/pages/auth/login/login.html");
        }
        return;
    }

  // Si no hay sesión redirigimos al login
    if (!userStore) {
        navigate("/src/pages/auth/login/login.html");
    return;
    }

  // Verificamos el rol
    const user: IUser = JSON.parse(userStore);

  // Si es cliente e intenta entrar a /admin/ redirige a su home
    if (user.role === "client" && rutaActual.includes("/admin/")) {
        navigate("/src/pages/store/home/home.html");
        return;
    }

  // Si es admin e intenta entrar a /client/ redirige a su home
    if (user.role === "admin" && rutaActual.includes("/client/")) {
        navigate("/src/pages/admin/home/home.html");
        return;
    }
};

checkRoute();