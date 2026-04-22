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

      if(cropper){
        cropper.destroy();
      }

      cropper = new Cropper(preview, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
        dragMode: "move",
        cropBoxMovable: false,
        cropBoxResizable: false,
        guides: false,
        center: false,
        highlight: false,
        background: false,
        zoomable: true
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
  alert("Cadastro funcionando 🚀");
}
