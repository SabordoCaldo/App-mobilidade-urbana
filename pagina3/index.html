let cropper;

document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");
  const btnConfirmar = document.getElementById("btnConfirmar");

  btnConfirmar.style.display = "none";

  const fotoSalva = localStorage.getItem("fotoUsuario");
  if(fotoSalva){
    preview.src = fotoSalva;
  }

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

      preview.src = event.target.result;

      if(cropper){
        cropper.destroy();
      }

      cropper = new Cropper(preview, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 0.8,
        movable: true,
        zoomable: true,
        scalable: true,
        cropBoxMovable: true,
        cropBoxResizable: true,
        guides: true,
        highlight: true,
        background: false
      });

      btnConfirmar.style.display = "block";
    };

    reader.readAsDataURL(file);
  });

});


function abrirFoto(){
  document.getElementById("fotoInput").click();
}


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


/* OLHO */
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
