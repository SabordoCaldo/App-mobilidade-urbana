/* =========================
   LISTAR MOTORISTAS
========================= */
function getMotoristas(){
  const dados = localStorage.getItem("motoristas");
  return dados ? JSON.parse(dados) : [];
}


/* =========================
   SALVAR NOVO MOTORISTA
========================= */
function salvarMotorista(novoMotorista){

  const motoristas = getMotoristas();

  // 🚨 EVITAR DUPLICIDADE (telefone)
  const existe = motoristas.find(m => m.telefone === novoMotorista.telefone);
  if(existe){
    alert("Já existe um motorista com esse telefone");
    return false;
  }

  const motorista = {
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

    // DADOS DO VEÍCULO (preenchido na página 5)
    placa: "",
    modelo: "",
    cor: "",
    renavan: "",
    fotoCRLV: "",

    // STATUS
    status: "pendente", // pendente | aprovado | bloqueado

    criadoEm: new Date().toISOString()
  };

  motoristas.push(motorista);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));

  // 🔥 SALVA ID ATUAL (para página 5)
  localStorage.setItem("motoristaAtualId", motorista.id);

  return true;
}


/* =========================
   BUSCAR POR TELEFONE
========================= */
function buscarMotorista(telefone){
  const motoristas = getMotoristas();
  return motoristas.find(m => m.telefone === telefone);
}


/* =========================
   BUSCAR POR ID
========================= */
function getMotoristaPorId(id){
  const motoristas = getMotoristas();
  return motoristas.find(m => m.id === id);
}


/* =========================
   ATUALIZAR MOTORISTA
========================= */
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


/* =========================
   MOTORISTA ATUAL (FLUXO)
========================= */
function getMotoristaAtualId(){
  return localStorage.getItem("motoristaAtualId");
}


/* =========================
   LIMPAR MOTORISTA ATUAL
========================= */
function limparMotoristaAtual(){
  localStorage.removeItem("motoristaAtualId");
}


/* =========================
   REMOVER MOTORISTA
========================= */
function removerMotorista(id){

  const motoristas = getMotoristas();

  const filtrados = motoristas.filter(m => m.id !== id);

  localStorage.setItem("motoristas", JSON.stringify(filtrados));
}
