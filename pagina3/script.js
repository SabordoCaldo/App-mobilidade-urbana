/* FOTO */
document.getElementById("fotoInput").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(file){
    const r = new FileReader();
    r.onload = ev => document.getElementById("preview").src = ev.target.result;
    r.readAsDataURL(file);
  }
});

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

/* TELEFONE */
document.getElementById("telefone").addEventListener("input", function(e){
  let v = e.target.value.replace(/\D/g,"");

  if(v.length > 11) v = v.slice(0,11);

  if(v.length > 6){
    v = v.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
  } else if(v.length > 2){
    v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else{
    v = v.replace(/^(\d*)$/, "($1");
  }

  e.target.value = v;
});

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
