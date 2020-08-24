function limpar() {
    var opcao = confirm("Deseja apagar os dados inseridos?");
    if (opcao == true) {
        /*Apagar os dados*/
        document.cadastro.reset();
    }
}

function enviarDados() {
    if (validacao() == true){
        document.cadastro.submit();
        alert("Seus dados foram enviados com Sucesso");
    }
}

function validacao() {
    var valido = true;
/*Validação nome*/
    var vnome = document.cadastro.nome.value;
    if(vnome.length<4){
        document.cadastro.nome.value = "";
        alert("O nome deve conter mais de 3 letras"); 
        valido = false;
    }else{
        document.cadastro.nome.value = vnome.toUpperCase();
    }
    
/*Validação do estado civil*/
    var estciv = document.cadastro.estado_civil.value; 
    if(estciv==""){
        document.getElementById("spanEC").innerHTML = "Selecione um estado valido";
        valido = false
    }else{
        document.getElementById("spanEC").innerHTML = "";
    }
    
/*Campo objetivo em letra minuscula*/
    document.cadastro.descricao.value = document.cadastro.descricao.value.toLowerCase();

/*Validacao Tel OU Email*/
    var tel = document.cadastro.tele.value
    var email = document.cadastro.email.value
    if(tel==""&&email==""){
        alert("Necessario informar telefone e/ou email");
        valido = false;
    }
    
/*Obrigando a escolha de um nivel nas linguagens*/
    if(document.cadastro.ing.value == "" || document.cadastro.esp.value == "" ){
        alert("Necessario selecionar um nivel para os idiomas");
        valido = false;
    }
   
/*Sem seleção de linguagem de programacao*/
if (document.getElementById("cb1").checked == false &&
    document.getElementById("cb2").checked == false &&
    document.getElementById("cb3").checked == false &&
    document.getElementById("cb4").checked == false &&
    document.getElementById("cb5").checked == false &&
    document.getElementById("cb6").checked == false &&
    document.getElementById("cb7").checked == false) {
    var opcao = confirm("Deseja Enviar o formulário sem nehuma linguagem ?");
    if (opcao == false){
        valido = false; //se for verdade não precisa mudar o valor de valido
    }
}
  
    return valido;
}
