let cropper;

document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");
  const btnConfirmar = document.getElementById("btnConfirmar");

  btnConfirmar.style.display = "none";

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

      preview.src = event.target.result;

      // 🔥 destrói se já existir
      if(cropper){
        cropper.destroy();
      }

      // 🔥 CROPPER AJUSTADO (QUADRADO FIXO + VISUAL)
      cropper = new Cropper(preview, {
        aspectRatio: 1,
        viewMode: 1,

        dragMode: "move",        // move imagem
        cropBoxMovable: false,   // trava o quadrado
        cropBoxResizable: false, // não redimensiona

        autoCropArea: 0.8,       // deixa o quadrado visível
        guides: true,
        center: true,
        highlight: true,

        zoomable: true,
        background: false
      });

      // mostra botão ✔
      btnConfirmar.style.display = "block";
    };

    reader.readAsDataURL(file);
  });

});


/* ABRIR GALERIA */
function abrirFoto(){
  document.getElementById("fotoInput").click();
}


/* CONFIRMAR CORTE */
function confirmarFoto(){

  if(!cropper) return;

  const canvas = cropper.getCroppedCanvas({
    width:300,
    height:300
  });

  const imagemFinal = canvas.toDataURL("image/jpeg");

  document.getElementById("preview").src = imagemFinal;

  localStorage.setItem("fotoUsuario", imagemFinal);

  cropper.destroy();
  cropper = null;

  document.getElementById("btnConfirmar").style.display = "none";
}


/* OLHO (senha) */
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


/* CADASTRO */
function cadastrar(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");
  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  salvarCliente({
    nome,
    telefone,
    endereco,
    senha
  });

  alert("Cadastro salvo com sucesso 🚀");
}
