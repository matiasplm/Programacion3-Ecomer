//Importaciones
import type {IUser} from "../../../types/IUser";
import {navigate} from "../../../utils/navigate";

//Creamos una interfaz para la contraseña
interface IUserResgistro extends IUser {
    password: string;
}

//Obtenemos el formulario de registro
const formResgistro = document.getElementById("form") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

//Agregamos un evento de submit al formulario
formResgistro.addEventListener("submit", (e:SubmitEvent) => {
    e.preventDefault();

    //Obtenemos los valores de los inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    //buscamos si el usuario ya existe un array en el localStorage
    const usersStore = localStorage.getItem("users");
    const users: IUserResgistro[] = usersStore ? JSON.parse(usersStore) : [];

    //Verificamos si el usuario ya existe
    const userExiste = users.some((user) => user.email === email);

    if (userExiste) {
        alert("El usuario ya existe");
        return;
    }

    //Creamos un nuevo usuario
    const nuevoUsuario: IUserResgistro = {
        email,
        password,
        loggedIn: false,
        role: "client"
    };

    //Agregamos el nuevo usuario al array de usuarios
    users.push(nuevoUsuario);

    //Guardamos el array de usuarios en el localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("¡Usuario registrado exitosamente!");

    //Redirigimos al usuario a la página de login
    navigate("/src/pages/auth/login/login.html")
});