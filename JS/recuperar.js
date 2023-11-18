const recuperarForm = document.querySelector('#recuperarForm')
recuperarForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const usuario = document.querySelector('#usuario-recuperar').value
    const word = document.querySelector('#word-recuperar').value
    const newpassword = document.querySelector('#password-recuperar').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.usuario === usuario && user.word === word)
    if(!validUser){
        return alert('Usuario y/o palabra clave incorrectos o inexistentes!')
    }
    if ( document.querySelector('#password-recuperar').value == " "  || document.querySelector('#password-recuperar').value.length<4) {
        alert("El nuevo PASSWORD está vacío o tiene menos de 4 caracteres ");
    }else{
    validUser.password =newpassword
    localStorage.setItem('users', JSON.stringify(Users))
    console.log(validUser)
    alert(`Bienvenido ${validUser.usuario}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../Registro.html'   
}
})