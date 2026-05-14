import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";

interface IUserLogin extends IUser {
  password: string;
}

//Obtenemos el formulario de login
const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;


//Agregamos un evento de submit al formulario
form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  //Obtenemos los valores de los inputs
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;

  //Obtenemos el array de usuarios del localStorage
  const usersStore = localStorage.getItem("users");
  const users: IUserLogin[] = usersStore ? JSON.parse(usersStore) : [];

  //Buscamos el usuario en el array de usuarios
  const userFound = users.find(
    (user) => user.email === valueEmail && user.password === valuePassword
  );

  //Si el usuario no existe, mostramos un mensaje de error
  if (!userFound) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  
  //Obtenemos el rol del usuario encontrado
  const valueRol = userFound.role as Rol;
  
  //Creamos un objeto de usuario para guardar en el localStorage
  const user: IUserLogin = {
    email: valueEmail,
    password: valuePassword,
    role: valueRol,
    loggedIn: true,
  };

  //Guardamos el usuario en el localStorage
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);

  //Redirigimos al usuario a la página correspondiente según su rol
  if (valueRol === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else if (valueRol === "client") {
    navigate("/src/pages/client/home/home.html");
  }

});
