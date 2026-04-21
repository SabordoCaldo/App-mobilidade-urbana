/* OLHO SENHA */
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

/* MÁSCARA TELEFONE */
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

/* BOTÃO ENTRAR */
function entrar(){
  alert("Login ainda não implementado");
}
