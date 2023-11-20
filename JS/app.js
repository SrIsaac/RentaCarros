window.addEventListener("load", () => {
});

const btn = document.querySelector("#boton");
let renta = [];
// document.addEventListener('DOMContentLoaded',function(){
//     RentIncrementation()
//     const numRenta = document.querySelector("#numRenta");
// })
RentIncrementation();
function car(placa, inicio, final, numRenta) {
  this.placa = placa;
  this.inicio = inicio;
  this.final = final;
  this.numRenta = numRenta;
}
//----------------- limpiar el fomulario-------------
function limpiarCampos() {
  document.querySelector("#placa").value = "";
  document.querySelector("#inicio").value = "";
  document.querySelector("#final").value = "";
  document.querySelector("#numRenta").value = "";
}
//-------------fin limpiar el fomulario-------------

// ----------Agregar a localStorage------------------
function agregarInfo(form) {
  const renta = infoLocal();
  renta.push(form);
  localStorage.setItem("Renta", JSON.stringify(renta));
}

function infoLocal() {
  let renta;
  if (localStorage.getItem("Renta") === null) {
    renta = [];
  } else {
    renta = JSON.parse(localStorage.getItem("Renta"));
  }
  return renta;
}
// -------------fin agregar al localStorage----------
//-------------- evento click en el boton--------------



    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const placa = document.querySelector("#placa").value;
      const inicio = document.querySelector("#inicio").value;
      const final = document.querySelector("#final").value;
      const numRenta = document.querySelector("#numRenta").value;
    
      if (placa === "" || inicio === "" || final === "" || numRenta === "") {
        alert("Completar todos los campos");
      } else {
        const form = new car(placa, inicio, final, numRenta);
        const C = carInUse(form.placa);
        const N = numRentUse(form.numRenta, numRenta);
        if (C) {
          if (N) {
            agregarInfo(form);
            limpiarCampos();
          } else {
            alert("Numero de renta en uso...Porfavor añada otro");
          }
        } else {
          alert("Carro en uso... Porfavor seleccione otro");
        }
      }
    });

//--------------fin evento click en el boton--------------

function carInUse(placa) {
  let use = true;
  const renta = infoLocal();
  renta.forEach((element) => {
    if (element.placa == placa) {
      use = false;
    }
  });
  return use;
}
//------------------Fin validacion del carro------------------
//--------------validacion Numero de entrega-----------------
function numRentUse(num) {
  let use = true;
  const renta = infoLocal();
  renta.forEach((element) => {
    if (element.numRenta == num) {
      use = false;
    }
  });
  return use;
}
function RentIncrementation() {
  const numRenta = document.querySelector("#numRenta");
  const renta = infoLocal();
  let con = 1;
  renta.forEach((element) => {
    if (element.numRenta) {
        con++
    }
  });
  numRenta.value = con;
  console.log(numRenta);
}
//------------------Fin validacion Numero de entrega----------
//-------------------- logout---------------
const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "../Registro.html";
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert(`Hasta pronto! ${user.usuario}`);
  localStorage.removeItem("login_success");
  window.location.href = "../Registro.html";
});
