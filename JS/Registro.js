const formRegistrar = document.querySelector('#formRegistrar')
formRegistrar.addEventListener('submit', (e)=>{
    e.preventDefault()
    const usuario = document.querySelector('#usuario-reg').value
    const nombre = document.querySelector('#nombre-reg').value
    const password = document.querySelector('#password-reg').value
    const word = document.querySelector('#word-reg').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    if ( document.querySelector('#usuario-reg').value == " " || document.querySelector('#usuario-reg').value.length<1 || document.querySelector('#usuario-reg').value.match(/[0-9]/)) {
        alert("El campo USUARIO está vacío o no contiene letras");
    }else{
    if ( document.querySelector('#nombre-reg').value == " " || document.querySelector('#nombre-reg').value.length<1 || document.querySelector('#nombre-reg').value.match(/[0-9]/))   {
        alert("El campo NOMBRE está vacío o no contiene letras");
    }else{
    if ( document.querySelector('#password-reg').value == " "  || document.querySelector('#password-reg').value.length<4) {
        alert("El campo PASSWORD está vacío o tiene menos de 4 caracteres ");
    }else{
    if ( document.querySelector('#word-reg').value == " " || document.querySelector('#word-reg').value.length<4 || document.querySelector('#word-reg').value.match(/[0-9]/)) {
        alert("El campo PALABRA está vacío, tiene menos de 4 caracteres o no son letras");
    }else{
    const usuarioregistrado = Users.find(user => user.usuario === usuario)
    if (usuarioregistrado) {
        return alert('El usuario ya esta registado, intenta con otro!')
    }
    Users.push({usuario: usuario, nombre: nombre, password: password, word: word})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = './REGISTRO/rentar.html'
}}}}
})