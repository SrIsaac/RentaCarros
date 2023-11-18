let formulario = document.getElementById("formulario");
let numeroEntrega = document.getElementById("numeroEntrega");
let numeroPlaca = document.getElementById("numeroPlaca");
let fechaDevolucion = document.getElementById("fechaDevolucion");
let btnguardar = document.getElementById("btnguardar");
let btnSearch = document.getElementById("bntsearch");
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
function findcarro(numRenta) {
  let local = agregarSacarInfo();
  if (numRenta) {
    // let parseData=JSON.parse(local);
    // console.log(parseData.inicio);
    // console.log(parseData.final);
  } else {
    // console.log('no entro');
  }
}
function searchCarro(numRenta) {
  let scarro = findcarro(numRenta);
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSearch = document.getElementById("btnsearch");
  btnSearch.addEventListener("click", () => {
    searchCarro(renta());
    pintarData()
  });
});

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
      
      
    }
  }


}
