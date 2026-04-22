let tipo = "";
let cidadeOk = false;

/* SELECIONAR TIPO */
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
  }else{
    cidadeOk = false;
  }

  validar();
});

/* ACEITE TERMOS */
document.getElementById("aceite").addEventListener("change", validar);

/* VALIDAR BOTÃO */
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

/* CONTINUAR (CORRIGIDO) */
function continuar(){

  if(!tipo) return alert("Selecione cliente ou motorista");

  if(tipo === "cliente"){
    window.location.href = "/App-mobilidade-urbana/pagina3/index.html";
  }

  if(tipo === "motorista"){
    window.location.href = "/App-mobilidade-urbana/pagina4/index.html";
  }

}

/* TERMOS */
function irTermos(){
  window.location.href = "/App-mobilidade-urbana/pagina2/termos/termos.html";
}

/* VOLTAR */
function voltar(){
  window.location.href = "/App-mobilidade-urbana/pagina1/index.html";
}
