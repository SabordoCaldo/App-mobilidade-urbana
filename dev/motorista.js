let motoristas = [];

function carregarMotoristas(){
  const dados = localStorage.getItem("motoristas");
  if(dados){
    motoristas = JSON.parse(dados);
  }
}

carregarMotoristas();


function salvarMotorista(motorista){

  const novoMotorista = {
    id: Date.now(),

    nome: motorista.nome,
    telefone: motorista.telefone,
    endereco: motorista.endereco,
    cnh: motorista.cnh,
    senha: motorista.senha,

    fotoPerfil: motorista.fotoPerfil,
    fotoCNH: motorista.fotoCNH,

    placa: "",
    modelo: "",
    cor: "",
    ano: "",
    renavan: "",
    fotoVeiculo: "",
    fotoCRLV: "",

    status: "aprovado" // já libera direto no dev
  };

  motoristas.push(novoMotorista);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
  localStorage.setItem("motoristaAtualId", novoMotorista.id);

  return true;
}


function getMotoristaAtualId(){
  return localStorage.getItem("motoristaAtualId");
}

function limparMotoristaAtual(){
  localStorage.removeItem("motoristaAtualId");
}
