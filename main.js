const numeroa = document.getElementById("numero-a");
const numerob = document.getElementById("numero-b");
const botsub = document.getElementById("bto-sub");
const valorok = document.getElementsByTagName("p");
const formV = document.getElementById("FormularioV");

//Inicio do comentario
//programa não estava conseguindo pegar pela Class/TagName
//Havia criado uma função para calcular para testes:

// function sub(){
  // let a = parseInt(document.getElementById("numero-a").value);
   //let b = parseInt(document.getElementById("numero-b").value);
   //let sub2 = (b-a)
   //document.getElementById("mensagem-soma").innerHTML = "A subtração e igual a : "+sub2;
   //document.getElementById("mensagem-soma").style.display="block";
//}
//Fim do comentario.

function VerificaNumero(){
   let a = parseInt(document.getElementById("numero-a").value);
   let b = parseInt(document.getElementById("numero-b").value);
   if (a > b) { 
      document.getElementById("Mensagems").innerHTML = "Valores Errados!";
      document.getElementById("Mensagems").style.display="block";
      numeroa.style.border = "2px solid #ff0505"; 
      document.getElementById("Mensagems").style.color = "#ff0505";
      botsub.style.display ="none";
      alert("Valor de A não pode Ser Maior que o B")
   } else {
      document.getElementById("Mensagems").innerHTML = "Valores OK";
      document.getElementById("Mensagems").style.display="block";
      numeroa.style.border = "2px solid #008000";
      botsub.style.display ="Block";
      document.getElementById("Mensagems").style.color = "#008000";
   }
}
function Limpa(){
   document.getElementById("numero-a").value='';
   document.getElementById("numero-b").value='';
   document.getElementById("Mensagems").style.display="none";
}
numeroa.addEventListener("keyup", function(e){
   //Comentario: console.log(e.target.value) (exibir os valores "Apanhados");
   VerificaNumero(e.target.value);
} )
numerob.addEventListener("keyup", function(e){
   //Comentario: console.log(e.target.value) (Exibe os Valores "Apanhados");
   VerificaNumero(e.target.value);
} )
formV.addEventListener('submit', function(e){
   e.preventDefault();
   numeroa.value = '';
   numerob.value = '';
   document.getElementById("Mensagems").style.display="none";
})