document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");

  // carregar foto salva
  const fotoSalva = localStorage.getItem("fotoUsuario");
  if(fotoSalva){
    preview.src = fotoSalva;
  }

  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      const imagem = event.target.result;

      preview.src = imagem;
      localStorage.setItem("fotoUsuario", imagem);
    };

    reader.readAsDataURL(file);
  });

});


function abrirFoto(){
  document.getElementById("fotoInput").click();
}


function removerFoto(){
  const preview = document.getElementById("preview");

  preview.src = "foto/avatar-padrao.png";
  localStorage.removeItem("fotoUsuario");
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

  const preview = document.getElementById("preview").src;

  // 🚨 VALIDA FOTO
  if(preview.includes("avatar-padrao")){
    return alert("Adicione uma foto de perfil");
  }

  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");
  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  salvarCliente({
    nome,
    telefone,
    endereco,
    senha,
    foto: preview
  });

  alert("Cadastro concluido con sucesso🚀");
}
