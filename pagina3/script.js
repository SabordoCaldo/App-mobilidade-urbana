/* FOTO PERFIL */
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

      // salva temporário (opcional)
      localStorage.setItem("fotoCliente", event.target.result);
    };

    reader.readAsDataURL(file);
  });

});


/* OLHO SENHA */
function toggleSenha(id, el){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    el.classList.add("off");
  }else{
    input.type = "password";
    el.classList.remove("off");
  }
}


/* BOTÃO FINALIZAR */
function cadastrar(){

  alert("Cadastro cliente funcionando 🚀");

  // 👉 redireciona (ajusta depois)
  window.location.href = "../pagina1/index.html";
}
