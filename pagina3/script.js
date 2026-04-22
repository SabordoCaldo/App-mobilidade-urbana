document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("fotoInput");
  const preview = document.getElementById("preview");

  /* CARREGAR FOTO SALVA */
  const fotoSalva = localStorage.getItem("fotoUsuario");
  if(fotoSalva){
    preview.src = fotoSalva;
  }

  /* ALTERAR FOTO */
  input.addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
      const imagem = event.target.result;

      preview.src = imagem;

      // salva
      localStorage.setItem("fotoUsuario", imagem);
    };

    reader.readAsDataURL(file);
  });

});


/* ABRIR GALERIA/CÂMERA */
function abrirFoto(){
  document.getElementById("fotoInput").click();
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
