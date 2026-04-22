let cropper;

document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");
  const btnConfirmar = document.getElementById("btnConfirmar");
  const container = document.getElementById("fotoContainer");

  btnConfirmar.style.display = "none";

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

      preview.src = event.target.result;

      // 🔥 AUMENTA AREA PRA CROPAR
      container.style.width = "300px";
      container.style.height = "300px";

      if(cropper){
        cropper.destroy();
      }

      cropper = new Cropper(preview, {
        aspectRatio: 1,
        viewMode: 1,
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

  // 🔥 VOLTA TAMANHO NORMAL
  const container = document.getElementById("fotoContainer");
  container.style.width = "120px";
  container.style.height = "120px";

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
