let tipo = "";
let cidadeOk = false;

/* BOTÕES */
function selecionarTipo(t){

  tipo = t;

  const c = document.getElementById("btnCliente");
  const m = document.getElementById("btnMotorista");

  c.classList.remove("btn-desativo");
  m.classList.remove("btn-desativo");

  if(t === "cliente") m.classList.add("btn-desativo");
  if(t === "motorista") c.classList.add("btn-desativo");

  validar();
}

/* CIDADE */
document.getElementById("cidade").addEventListener("change", function(){

  if(this.value === "passos"){
    cidadeOk = true;
  }else if(this.value){
    cidadeOk = false;
    alert("🚫 Serviço indisponível na sua cidade ainda");
  }

  validar();
});

/* ACEITE */
document.getElementById("aceite").addEventListener("change", validar);

/* VALIDAR */
function validar(){

  const aceite = document.getElementById("aceite").checked;
  const btn = document.getElementById("continuar");

  if(tipo && cidadeOk && aceite){
    btn.disabled = false;
    btn.classList.remove("btn-disabled");
  }else{
    btn.disabled = true;
    btn.classList.add("btn-disabled");
  }

}

/* VOLTAR */
function voltar(){
  window.history.back();
}
