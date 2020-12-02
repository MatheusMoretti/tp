//variavel para controlar o contexto do dialogo
var contextDialog = '{}';

function sendMessageToAssistant() {
    //recupera a mensagem digitada pelo usuario
    var textMessage = document.chatForm.textMessage.value;
    chat = document.getElementById('chat');

    //a primeira msg de boas vidnas eh undefined
    if (textMessage === undefined || textMessage === '')
        textMessage = '';
    else
    chat.innerHTML += 'Voce -->' + textMessage + '<br>';

    //limpa o campo input
    document.chatForm.textMessage.value = '';

    //post para o servico watsonAssistant
    $.post("/ibmWatson/assistant",
        { text: textMessage, contextDialog },
        //tratamento de sucesso de processamento do post
        function (returnedData, statusRequest) {
            //erro no processamento da API
            if (returnedData.status === 'ERRO')
                alert(returnedData.data);
            //caso os dados tenham retornado com sucesso
            else {
                //exibe retorno da API e recupera o contexto para o proximo dialogo
                chat.innerHTML += 'ChatBot --> ' + returnedData.data.result.output.text + '<br>';
                contextDialog = JSON.stringify(returnedData.data.result.context);
            }
        }
    )

    //tratamento de erro do post
    .fail(function (returnedData) {
        alert('Erro: ' + returnedData.status + ' ' + returnedData.status.statusText);
    });
}

$(document).keypress( 
    function(event){
        if(event.which == '13'){
            event.preventDefault();
            sendMessageToAssistant();
        }
    }
);

$(document).ready(function(){
    sendMessageToAssistant();
});