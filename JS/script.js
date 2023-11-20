let formulario = document.getElementById("formulario");
let numeroEntrega = document.getElementById("numeroEntrega");
let numeroPlaca = document.getElementById("numeroPlaca");
let btnupdate = document.getElementById("btnUpdate");
let numRenta = document.querySelector("#numRenta");
let placa = document.querySelector("#placa");
let inicio = document.querySelector("#inicio");
let final = document.querySelector("#final");

let arrayDatos;

function agregarSacarInfo() {
  if (localStorage.getItem("Renta") == null) {
    arrayDatos = [];
  } else {
    arrayDatos = JSON.parse(localStorage.getItem("Renta"));
  }
  return arrayDatos;
}
btnClean.addEventListener("click", () => {
  document.getElementById("numeroEntrega").value = "";
  document.getElementById("numeroPlaca").value = "";
  document.getElementById("fechaDevolucion").value = "";
});

//--------------------funcion para buscar -----------------

document.addEventListener("DOMContentLoaded", function () {
  const btnSearch = document.getElementById("btnsearch");
  const btnupdate = document.getElementById("btnUpdate");
  // -------------------evento Buscar----------------
  btnSearch.addEventListener("click", () => {
    renta()
    pintarData()
  });

});

// -------------------pintar datos ---------------------------
function renta() {
  let numerosRenta = [];
  let local = agregarSacarInfo();
  local.forEach((element) => {
    numerosRenta.push(element.numRenta);
  });

  return numerosRenta;
}

document.addEventListener("DOMContentLoaded", pintarOptio);
function pintarOptio() {
  const select = document.querySelector("#numeroEntrega");
  let numeroRenta = renta();

  select.innerHTML = "";

  numeroRenta.forEach((element) => {
    select.innerHTML += `
      <option value="${element}">${element}</option> 
      `;
  });
}
// ------------------fin pintar datos-----------------------
function pintarData(){
  const data=document.querySelector('#numeroEntrega').value;
  const devolucion=document.querySelector('#fechaDevolucion');
  const placa=document.querySelector("#numeroPlaca");
  let local = agregarSacarInfo();
  
  console.log(devolucion);
  
  for(let i=0; i<local.length;i++){
    if (data==local[i].numRenta){
      placa.value=local[i].placa;
      devolucion.value=local[i].final;
      // -----------------evento actualizar------------
      btnupdate.addEventListener("click", () => {
        local[i].final=devolucion.value
        localStorage.setItem('Renta',JSON.stringify(local))
      });
      //--------------fin evento actualizar------------
    }
  }
}

//-------------------- logout---------------
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = '../Registro.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{

    alert(`Hasta pronto! ${user.usuario}`)
    localStorage.removeItem('login_success')
    window.location.href = '../Registro.html'
})
