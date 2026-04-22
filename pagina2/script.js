let tipo = "";
let cidadeOk = false;

/* SELEÇÃO BOTÕES */
function selecionarTipo(t){

  tipo = t;

  const c = document.getElementById("btnCliente");
  const m = document.getElementById("btnMotorista");

  // limpa classes
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

/* CONTINUAR */
function continuar(){

  // segurança extra
  if(!tipo) return alert("Selecione cliente ou motorista");

  // 👉 escolha UMA das opções abaixo

  // 🔹 OPÇÃO 1 (caminho relativo - funciona local)
  if(tipo === "cliente"){
    window.location.href = "../pagina3/";
  }

  if(tipo === "motorista"){
    window.location.href = "../pagina4/";
  }

  // 🔹 OPÇÃO 2 (mais seguro no GitHub Pages)
  /*
  if(tipo === "cliente"){
    window.location.href = "/App-mobilidade-urbana/pagina3/index.html";
  }

  if(tipo === "motorista"){
    window.location.href = "/App-mobilidade-urbana/pagina4/index.html";
  }
  */
}

/* TERMOS */
function irTermos(){
  window.location.href = "../pagina2/termos/termos.html";
}

/* VOLTAR */
function voltar(){
  window.location.href = "../pagina1/";
}
