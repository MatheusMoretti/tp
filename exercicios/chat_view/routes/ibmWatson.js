var express = require('express');
var router = express.Router();
const ibmWatson = require('../lib/ibmWatsonCredentials.js');

//post para o servico: ibm watson assistant

router.post('/assistant', function(req, res, next) {
    console.log("teste de chegada");
  //recupera a mensagem de texto da conversa
  let { text, contextDialog } = req.body;
  let context = JSON.parse(contextDialog);

  //construcao do json para envio dos dados ao servico
  //input  o texto do usuario, workspaceId seu workspace ID, context o contexto criado
  let params = {
      input: { text },
      workspaceId: 'YOUR WORK SPACE ID', 
      context
  }

  //envia os dados ao servico e retorna a mensagem
  ibmWatson.assistant.message(
      params,
      function (err, response){
          if(err)
          res.json({ status:'ERRO', data: err.toString() });
          else
          res.json({ status:'OK', data:response });
      }
  );

});

module.exports = router;
