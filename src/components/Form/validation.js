const validation = (userData) => {

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};

  if (!regexEmail.test(userData.username)) {
    errors.username = "El nombre de usuario tiene que ser un email";
  }
  if (!userData.username) {
    errors.username = "Este campo no puede quedar vacio";
  }
  if (userData.username.length > 35) {
    errors.username = "Máximo 35 caracteres";
  }

  //esta regex testea si hay numero. tambien con includes podriamos hacerlo, pero sin la regex
  if (!regexPass.test(userData.password)) {
    errors.password = "Debe contener al menos un número"
  }

  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
  }
  if(!userData.password) {
    errors.password = "Este campo no puede quedar vacio"
}
  return errors;

  //User
  //   if(!userData.username) setErrors({...errors, username: 'Ingrese usuario...'});
  //   else {
  //       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))
  //         setErrors({ ...errors, username: "" });
  //       else setErrors({ ...errors, username: "Usuario inválido" });
  //   }

  //   Password
  //   if(!userData.password) setErrors({...errors, password: 'Ingrese password...'});
  //   else setErrors({...errors, password: ''});
};

export default validation;
