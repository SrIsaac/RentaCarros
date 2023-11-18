const formEnter = document.querySelector('#formEnter')
formEnter.addEventListener('submit', (e)=>{
    e.preventDefault()
    const usuario = document.querySelector('#usuario-enter').value
    const password = document.querySelector('#password-enter').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.usuario === usuario && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.usuario}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../REGISTRO/rentar.html'   

})