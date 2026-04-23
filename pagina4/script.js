function cadastrarMotorista(){

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cnh = document.getElementById("cnh").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  const fotoPerfil = localStorage.getItem("fotoMotoristaPerfil");
  const fotoCNH = localStorage.getItem("fotoMotoristaCNH");

  // 🚨 FOTO
  if(!fotoPerfil) return alert("Adicione a foto de perfil");
  if(!fotoCNH) return alert("Adicione a foto da CNH");

  // 🚨 CAMPOS
  if(!nome) return alert("Digite seu nome");
  if(!telefone) return alert("Digite seu telefone");
  if(!endereco) return alert("Digite seu endereço");

  // 🚨 CNH (11 números)
  if(!/^\d{11}$/.test(cnh)){
    return alert("A CNH deve ter 11 números");
  }

  // 🚨 SENHA
  if(senha.length < 4) return alert("Senha mínimo 4 dígitos");
  if(senha !== confirmar) return alert("Senhas não coincidem");

  // 🚨 SALVAR (COM BLOQUEIO DE DUPLICIDADE)
  const sucesso = salvarMotorista({
    nome,
    telefone,
    endereco,
    cnh,
    senha,
    fotoPerfil,
    fotoCNH
  });

  // 🚨 SE JÁ EXISTIR, PARA AQUI
  if(!sucesso) return;

  // SUCESSO
  alert("Quase lá! 🚗\nAgora complete os dados do veículo.");
  }
