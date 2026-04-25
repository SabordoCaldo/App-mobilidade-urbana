let fotoPerfilOK = false;
let fotoCNHOK = false;

document.addEventListener("DOMContentLoaded", function(){

  const btn = document.querySelector(".btn");
  btn.disabled = true;
  btn.style.background = "#f7e27a";

  // FOTO PERFIL
  document.getElementById("fotoPerfilInput").addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      document.getElementById("previewPerfil").src = event.target.result;
      fotoPerfilOK = true;
      validar();
    };

    reader.readAsDataURL(file);
  });

  // FOTO CNH
  document.getElementById("fotoCNHInput").addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      document.getElementById("previewCNH").src = event.target.result;
      fotoCNHOK = true;
      validar();
    };

    reader.readAsDataURL(file);
  });

  // CAMPOS
  ["nome","telefone","endereco","cnh","senha","confirmar"].forEach(id=>{
    document.getElementById(id).addEventListener("input", validar);
  });

  // TELEFONE
  document.getElementById("telefone").addEventListener("input", formatarTelefone);

});


function abrirFoto(tipo){
  if(tipo === "perfil"){
    document.getElementById("fotoPerfilInput").click();
  }
  if(tipo === "cnh"){
    document.getElementById("fotoCNHInput").click();
  }
}


function formatarTelefone(e){

  let v = e.target.value.replace(/\D/g, "");

  if(v.length > 11) v = v.slice(0,11);

  if(v.length > 6){
    v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  }else if(v.length > 2){
    v = `(${v.slice(0,2)}) ${v.slice(2)}`;
  }

  e.target.value = v;
}


function validar(){

  let ok = true;

  const nome = nomeVal("nome");
  const telefone = nomeVal("telefone");
  const endereco = nomeVal("endereco");
  const cnh = document.getElementById("cnh").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome || !telefone || !endereco) ok = false;

  // CNH 11 dígitos
  if(!/^\d{11}$/.test(cnh)) ok = false;

  // SENHA
  if(senha.length < 4) ok = false;

  // CONFIRMAÇÃO
  if(confirmar && senha !== confirmar){
    ok = false;
    document.getElementById("confirmar").style.border = "2px solid red";
  }else{
    document.getElementById("confirmar").style.border = "none";
  }

  if(!fotoPerfilOK || !fotoCNHOK) ok = false;

  const btn = document.querySelector(".btn");

  if(ok){
    btn.disabled = false;
    btn.style.background = "#FFD600";
  }else{
    btn.disabled = true;
    btn.style.background = "#f7e27a";
  }
}


function nomeVal(id){
  return document.getElementById(id).value.trim();
}


function toggleSenha(id, el){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    el.style.color = "red";
  }else{
    input.type = "password";
    el.style.color = "gray";
  }
}


function cadastrarMotorista(){

  alert("Falta pouco!\nAgora cadastre seu veículo 🚗");

  window.location.href = "../pagina5/index.html";
}
