let cropper;

function abrirFoto(){
  document.getElementById("fotoInput").click();
}

document.getElementById("fotoInput").addEventListener("change", function(e){

  const file = e.target.files[0];
  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(event){

    const modal = document.getElementById("modalCrop");
    const img = document.getElementById("imagemCrop");

    img.src = event.target.result;

    modal.style.display = "flex";

    if(cropper) cropper.destroy();

    cropper = new Cropper(img, {
      aspectRatio: 1,
      viewMode: 1,
      dragMode: "move",
      cropBoxMovable: false,
      cropBoxResizable: false,
      autoCropArea: 0.8,
      zoomable: true,
      background: false
    });

  };

  reader.readAsDataURL(file);
});

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

  document.getElementById("modalCrop").style.display = "none";
}
