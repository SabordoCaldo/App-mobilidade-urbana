const campos = ["nome","telefone","endereco","senha","confirmar"];
let fotoOK = false;

function abrirFoto(){
  document.getElementById("fotoInput").click();
}

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


campos.forEach(id=>{
  document.getElementById(id).addEventListener("input", validar);
});


function validar(){

  let ok = true;

  campos.forEach(id=>{
    if(!document.getElementById(id).value.trim()){
      ok = false;
    }
  });

  if(!fotoOK) ok = false;

  const btn = document.getElementById("btnCadastrar");

  if(ok){
    btn.disabled = false;
    btn.classList.add("ativo");
  }else{
    btn.disabled = true;
    btn.classList.remove("ativo");
  }
}


function toggleSenha(id, el){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    el.classList.add("off"); // fica vermelho
  }else{
    input.type = "password";
    el.classList.remove("off");
  }
}


function cadastrar(){

  alert("Seu cadastro foi concluído ✅");

  window.location.href = "../pagina6/index.html";
}
