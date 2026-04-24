/* CAMPOS */
const campos = ["nome","telefone","endereco","senha","confirmar"];
let fotoOK = false;


/* FOTO */
function abrirFoto(){
  document.getElementById("fotoInput").click();
}

document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      preview.src = event.target.result;
      fotoOK = true;
      validarCampos();
    };

    reader.readAsDataURL(file);
  });

});


/* VALIDAÇÃO */
campos.forEach(id=>{
  const el = document.getElementById(id);
  if(el){
    el.addEventListener("input", validarCampos);
  }
});


function validarCampos(){

  let preenchido = true;

  campos.forEach(id=>{
    const el = document.getElementById(id);
    if(!el || !el.value.trim()){
      preenchido = false;
    }
  });

  if(!fotoOK) preenchido = false;

  const btn = document.querySelector(".btn");

  if(preenchido){
    btn.disabled = false;
    btn.style.opacity = "1";
  }else{
    btn.disabled = true;
    btn.style.opacity = "0.5";
  }
}


/* OLHO */
function toggleSenha(id, el){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    el.style.color = "red"; // 🔴 vermelho
  }else{
    input.type = "password";
    el.style.color = "gray"; // ⚪ cinza
  }
}


/* CADASTRO */
function cadastrar(){

  alert("Seu cadastro foi concluído");

  window.location.href = "../pagina6/index.html";
}
