// LISTA DE MOTORISTAS
function getMotoristas(){
  const dados = localStorage.getItem("motoristas");
  return dados ? JSON.parse(dados) : [];
}


// SALVAR MOTORISTA
function salvarMotorista(novoMotorista){

  const motoristas = getMotoristas();

  motoristas.push({
    id: Date.now(),

    // DADOS PESSOAIS
    nome: novoMotorista.nome,
    telefone: novoMotorista.telefone,
    endereco: novoMotorista.endereco,
    cnh: novoMotorista.cnh,
    senha: novoMotorista.senha,

    // IMAGENS
    fotoPerfil: novoMotorista.fotoPerfil,
    fotoCNH: novoMotorista.fotoCNH,

    // DADOS VEÍCULO (página 5 depois)
    placa: "",
    modelo: "",
    cor: "",
    renavan: "",
    fotoCRLV: "",

    // STATUS
    status: "pendente", // pode ser: pendente, aprovado, bloqueado

    criadoEm: new Date().toISOString()
  });

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
}


// BUSCAR MOTORISTA POR TELEFONE
function buscarMotorista(telefone){
  const motoristas = getMotoristas();
  return motoristas.find(m => m.telefone === telefone);
}


// ATUALIZAR MOTORISTA (usado na página 5)
function atualizarMotorista(id, dadosAtualizados){

  const motoristas = getMotoristas();

  const atualizados = motoristas.map(m => {
    if(m.id === id){
      return { ...m, ...dadosAtualizados };
    }
    return m;
  });

  localStorage.setItem("motoristas", JSON.stringify(atualizados));
}


// REMOVER MOTORISTA (opcional)
function removerMotorista(id){

  const motoristas = getMotoristas();
  const filtrados = motoristas.filter(m => m.id !== id);

  localStorage.setItem("motoristas", JSON.stringify(filtrados));
}
