
function calculateBill()
{
  const costValue = document.querySelector(".costEntry");
  let newCostValue = costValue.value.replace(/,/g, '.');
  return newCostValue * 1.75;
}

function showBill()
{
  const containerToShow = document.querySelector(".costResult");
  const cost = calculateBill();

  if(cost < 0)
  {
    swal("Error ", "Operacion Invalida", "error");
    return;
  }

  if(cost === 0) {
    swal("Error ", "Debes ingresar un monto", "error");
    return;
  }

  if(isNaN(cost))
  {
    swal("Error", "Caracteres invalidos", "warning");
    return;
  }

  if((cost > 0) && (cost < 1500)) {

    containerToShow.innerHTML = "El precio es ARS<span class='cost cheaper'>&nbsp;$" + parseFloat(cost)  ;
  }

  else if((cost >= 500) && (cost < 5000)) {

    containerToShow.innerHTML = "El precio es ARS<span class='cost mediumCost'>&nbsp;$" + parseFloat(cost) ;
  }

  else if((cost >= 10000)) {

    containerToShow.innerHTML = "El precio es ARS<span class='cost expensive'>&nbsp;$" + parseFloat(cost);
  }
   
}

function help() {
  return swal({
    title: "Instrucciones",
    html: "<br><div class='steps'><b>1.</b>Vas a la app de blizzard y te fijas el precio del juego<br></div><div class='steps'><b>2.</b> Escribís el precio en la calculadora<br></div><div class='steps'><b>3.</b> Presionás en 'Calcular'</div><span class='separator'></span>Listo. Te devuelve el precio final en cuestion",
    confirmButtonText: "Cerrar",
    type: "info",
    customClass: "helpAlert"
  });
}

document.addEventListener("DOMContentLoaded", ()=> {

  const calculateInput = document.querySelector(".costEntry");
  const calculateButton = document.querySelector(".costButton");
  const helpButton = document.querySelector(".help__button");



  helpButton.addEventListener("click", (e)=> {
    e.preventDefault();
    help();
  });

  calculateInput.addEventListener("keydown", (event)=> {

    if(event.keyCode === 13) { 
      event.preventDefault();
      showBill();
    }
  });

  calculateButton.addEventListener("click", (event)=> {

    event.preventDefault();
    showBill();
  });


});

