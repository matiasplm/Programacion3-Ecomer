//Importacion de tipos y funciones 
import type { IUser } from "./types/IUser";
import { getUSer } from "./utils/localStorage";
import { navigate } from "./utils/navigate";

const checkRoute = () => {
    const rutaActual = window.location.pathname;
    const userStore = getUSer();

    //Si la ruta actual es la de login o registro
    if (rutaActual.includes("/auth/")){
        return;
    }

    //si el usuario no esta logueado, redirigimos a login
    if (!userStore) {
        navigate("/src/pages/auth/login/login.html");
        return;
    }

    //Si el usuario esta logueado, verificamos su rol.
    const user: IUser = JSON.parse(userStore);

    //Redirigimos al usuario a la página correspondiente según su rol
    if (user.role === "admin" && !rutaActual.includes("/admin/")) {
        navigate("/src/pages/admin/home/home.html");
    } else if (user.role === "client" && !rutaActual.includes("/client/")) {
        navigate("/src/pages/client/home/home.html");
    }
};

checkRoute();




