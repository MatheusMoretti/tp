var express = require('express');
var router = express.Router();
const lngtrans = require('../lib/ibmTranslateCredentials');

//post para o servico: ibm watson assistant

router.post('/', function (req, res, next) {
    var texto = req.body.msg;

    const translateParams = {
        text: texto,
        modelId: 'pt-en',
    };

    lngtrans.languageTranslator
    .translate(translateParams)
    .then((translationResult) => {
      console.log(JSON.stringify(translationResult, null, 2));

      return res.json(translationResult);
    })
    .catch((err) => {
      console.log("error:", err);
    });

});

module.exports = router;
