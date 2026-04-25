document.addEventListener("DOMContentLoaded", function(){

  carregarImagem("fotoVeiculoInput", "previewVeiculo", "fotoVeiculo");
  carregarImagem("fotoCRLVInput", "previewCRLV", "fotoCRLV");

});


function carregarImagem(inputId, previewId, storageKey){

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


function abrirFotoVeiculo(){
  document.getElementById("fotoVeiculoInput").click();
}

function abrirFotoCRLV(){
  document.getElementById("fotoCRLVInput").click();
}


function salvarVeiculo(){

  const placa = document.getElementById("placa").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const cor = document.getElementById("cor").value.trim();
  const ano = document.getElementById("ano").value.trim();
  const renavan = document.getElementById("renavan").value.trim();

  const fotoVeiculo = localStorage.getItem("fotoVeiculo");
  const fotoCRLV = localStorage.getItem("fotoCRLV");

  const id = getMotoristaAtualId();

  if(!placa) return alert("Digite a placa");
  if(!modelo) return alert("Digite o modelo");
  if(!cor) return alert("Digite a cor");
  if(!ano) return alert("Digite o ano");

  if(!/^\d{11}$/.test(renavan)){
    return alert("RENAVAN deve ter 11 números");
  }

  if(!fotoVeiculo) return alert("Adicione a foto da moto");
  if(!fotoCRLV) return alert("Adicione a foto do CRLV");

  atualizarMotorista(id, {
    placa,
    modelo,
    cor,
    ano,
    renavan,
    fotoVeiculo,
    fotoCRLV
  });

  // ✅ CORREÇÃO AQUI (fora da função duplicada)
  alert("Cadastro finalizado!\n\nAguarde aprovação.\nDepois faça seu login 🚀");

  limparMotoristaAtual();

  window.location.href = "../pagina1/index.html";
}
