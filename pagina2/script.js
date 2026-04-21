let tipo = "";
let cidadeOk = false;

/* SELEÇÃO BOTÕES */
function selecionarTipo(t){

  tipo = t;

  const c = document.getElementById("btnCliente");
  const m = document.getElementById("btnMotorista");

  c.classList.remove("btn-selecionado","btn-apagado");
  m.classList.remove("btn-selecionado","btn-apagado");

  if(t === "cliente"){
    c.classList.add("btn-selecionado");
    m.classList.add("btn-apagado");
  }

  if(t === "motorista"){
    m.classList.add("btn-selecionado");
    c.classList.add("btn-apagado");
  }

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

/* TERMOS */
function irTermos(){
  window.location.href = ROTAS.termos;
}

/* VOLTAR */
function voltar(){
  window.location.href = ROTAS.login;
}

/* CONTINUAR */
function continuar(){

  if(tipo === "cliente"){
    alert("Cadastro cliente (próxima etapa)");
  }

  if(tipo === "motorista"){
    alert("Cadastro motorista (próxima etapa)");
  }

}
