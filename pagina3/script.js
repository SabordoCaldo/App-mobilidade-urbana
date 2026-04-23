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
  const foto = document.getElementById("preview").src;

  // 🚨 FOTO OBRIGATÓRIA
  if(foto.includes("avatar-padrao")){
    return alert("Adicione uma foto de perfil");
  }

  // CAMPOS
  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");
  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  // 🚨 SALVAR COM VALIDAÇÃO (DUPLICIDADE)
  const sucesso = salvarCliente({
    nome,
    telefone,
    endereco,
    senha,
    foto
  });

  // 🚨 SE JÁ EXISTIR, PARA AQUI
  if(!sucesso) return;

  alert("Cadastro realizado com sucesso 🚀");

}
