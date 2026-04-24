document.addEventListener("DOMContentLoaded", function(){

  setupFoto("fotoPerfilInput", "previewPerfil", "fotoMotoristaPerfil");
  setupFoto("fotoCNHInput", "previewCNH", "fotoMotoristaCNH");

});


/* FOTO */
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
      const img = event.target.result;

      preview.src = img;
      localStorage.setItem(storageKey, img);
    };

    reader.readAsDataURL(file);
  });
}


/* ABRIR FOTO */
function abrirFoto(tipo){

  if(tipo === "perfil"){
    document.getElementById("fotoPerfilInput").click();
  }

  if(tipo === "cnh"){
    document.getElementById("fotoCNHInput").click();
  }
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
function cadastrarMotorista(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cnh = document.getElementById("cnh").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  const fotoPerfil = localStorage.getItem("fotoMotoristaPerfil");
  const fotoCNH = localStorage.getItem("fotoMotoristaCNH");

  // FOTO
  if(!fotoPerfil) return alert("Adicione a foto de perfil");
  if(!fotoCNH) return alert("Adicione a foto da CNH");

  // CAMPOS
  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");

  // CNH
  if(!/^\d{11}$/.test(cnh)){
    return alert("A CNH deve ter 11 números");
  }

  // SENHA
  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  // SALVAR
  const sucesso = salvarMotorista({
    nome,
    telefone,
    endereco,
    cnh,
    senha,
    fotoPerfil,
    fotoCNH
  });

  // BLOQUEIO DUPLICADO
  if(!sucesso) return;

  // MENSAGEM
  alert("Quase lá! 🚗\nAgora complete os dados do veículo.");

  // REDIRECIONAR
  window.location.href = "../pagina5/index.html";
}
