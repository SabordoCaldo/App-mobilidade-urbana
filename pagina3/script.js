let fotoOK = false;

document.addEventListener("DOMContentLoaded", function(){

  const btn = document.querySelector(".btn");

  btn.disabled = true;
  btn.style.background = "#f7e27a"; // amarelo claro

  // FOTO
  document.getElementById("fotoInput").addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      document.getElementById("preview").src = event.target.result;
      fotoOK = true;
      validar();
    };

    reader.readAsDataURL(file);
  });

  // CAMPOS
  ["nome","telefone","endereco","senha","confirmar"].forEach(id=>{
    document.getElementById(id).addEventListener("input", validar);
  });

  // TELEFONE MÁSCARA
  document.getElementById("telefone").addEventListener("input", formatarTelefone);

});


/* ABRIR FOTO */
function abrirFoto(){
  document.getElementById("fotoInput").click();
}


/* TELEFONE */
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


/* VALIDAR */
function validar(){

  let ok = true;

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome || !telefone || !endereco) ok = false;

  // SENHA
  if(senha.length < 4){
    ok = false;
  }

  // CONFIRMAÇÃO
  if(confirmar && senha !== confirmar){
    ok = false;
    document.getElementById("confirmar").style.border = "2px solid red";
  }else{
    document.getElementById("confirmar").style.border = "none";
  }

  if(!fotoOK) ok = false;

  const btn = document.querySelector(".btn");

  if(ok){
    btn.disabled = false;
    btn.style.background = "#FFD600"; // amarelo forte
  }else{
    btn.disabled = true;
    btn.style.background = "#f7e27a"; // amarelo claro
  }
}


/* OLHO */
function toggleSenha(id, el){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    el.style.color = "red"; // X vermelho
  }else{
    input.type = "password";
    el.style.color = "gray"; // olho cinza
  }
}


/* CADASTRO */
function cadastrar(){

  alert("Seu cadastro foi concluído");

  window.location.href = "../pagina6/index.html";
}
