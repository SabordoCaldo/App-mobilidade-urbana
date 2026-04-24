document.addEventListener("DOMContentLoaded", function(){

  setupFoto("fotoPerfilInput", "previewPerfil", "fotoMotoristaPerfil");
  setupFoto("fotoCNHInput", "previewCNH", "fotoMotoristaCNH");

});


function setupFoto(inputId, previewId, storageKey){

  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  const salva = localStorage.getItem(storageKey);
  if(salva){
    preview.src = salva;
  }

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      preview.src = event.target.result;
      localStorage.setItem(storageKey, event.target.result);
    };

    reader.readAsDataURL(file);
  });
}


function abrirFoto(tipo){
  if(tipo === "perfil"){
    document.getElementById("fotoPerfilInput").click();
  }
  if(tipo === "cnh"){
    document.getElementById("fotoCNHInput").click();
  }
}


function cadastrarMotorista(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cnh = document.getElementById("cnh").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  const fotoPerfil = localStorage.getItem("fotoMotoristaPerfil");
  const fotoCNH = localStorage.getItem("fotoMotoristaCNH");

  if(!fotoPerfil) return alert("Adicione a foto de perfil");
  if(!fotoCNH) return alert("Adicione a foto da CNH");

  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");

  if(!/^\d{11}$/.test(cnh)){
    return alert("A CNH deve ter 11 números");
  }

  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  const sucesso = salvarMotorista({
    nome,
    telefone,
    endereco,
    cnh,
    senha,
    fotoPerfil,
    fotoCNH
  });

  if(sucesso){
    alert("Quase lá! 🚗\nAgora complete os dados do veículo.");
    window.location.href = "../pagina5/index.html";
  }else{
    alert("Erro ao cadastrar");
  }
}
