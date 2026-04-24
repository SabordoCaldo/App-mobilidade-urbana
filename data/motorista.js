let motoristas = [];

function carregarMotoristas(){
  const dados = localStorage.getItem("motoristas");
  if(dados){
    motoristas = JSON.parse(dados);
  }
}

carregarMotoristas();


function salvarMotorista(motorista){

  const telefoneExiste = motoristas.find(m => m.telefone === motorista.telefone);
  if(telefoneExiste){
    return false;
  }

  const cnhExiste = motoristas.find(m => m.cnh === motorista.cnh);
  if(cnhExiste){
    return false;
  }

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

    status: "pendente"
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
