export class Usuario {
  public correo = '';
  public password = '';
  public nombre = '';
  public preguntaSecreta = '';
  public respuestaSecreta = '';
  public usuario?: Usuario;

  
  constructor(
    correo: string,
    password: string,
    nombre: string,
    preguntaSecreta: string,
    respuestaSecreta: string)
  {
    this.correo = correo;
    this.password = password;
    this.nombre = nombre;
    this.preguntaSecreta = preguntaSecreta;
    this.respuestaSecreta = respuestaSecreta;
  }

  public listaUsuariosValidos(): Usuario[] {
    const lista = [];
    lista.push(new Usuario('admin', '1234', 'Ana Torres Leiva'
      , '¿Cuál es tu animal favorito?', 'gato'));
    lista.push(new Usuario('atorres@duocuc.cl', '1234', 'Ana Torres Leiva'
      , '¿Cuál es tu animal favorito?', 'gato'));
    lista.push(new Usuario('admin', '1234', 'Matias'
      , '¿Cuál es tu animal favorito?', 'gato'));
    lista.push(new Usuario('avalenzuela@duocuc.cl', 'qwer', 'Alberto Valenzuela Nuñez'
      , '¿Nombre de su mejor amigo ?', 'Juanito'));
    lista.push(new Usuario('cfuentes@duocuc.cl', 'asdf', 'Carla Fuentes Gonzales'
      , '¿Lugar de nacimiento de su madre?', 'valparaiso'));
    return lista;
  }

  
 
  
  // public buscarUsuarioPorCorreo(correo: string): Usuario | null {
  //   const usuario = this.listaUsuariosValidos().find(
  //     usu => usu.correo === correo);
  //   if (usuario !== undefined) {
  //     return usuario;
  //   } else {
  //     return null;
  //   }
  // }
  
  public buscarUsuarioValido(correo: string, password: string): Usuario | undefined {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo && usu.password === password
    )!;
  }
  
  public buscarUsuarioPorCorreo(correo: string): Usuario | undefined {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo
    )!;
  }
  

  public validarcorreo(): string {
    if (this.correo.trim() === '') {
      return 'Al ingresar en el sistema debe ingresar un nombre de usuario.';
    }
    if (this.correo.length < 3 || this.correo.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    
    if (this.password.length !== 4) {
      return 'La contraseña debe tener 4 caracteres.';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarcorreo()
      || this.validarPassword();
  }
}
