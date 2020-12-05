const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2020-12-02',
  authenticator: new IamAuthenticator({
    apikey: 'OQ-Gn8yZ0mW13v4Bsd64Bc5JPP6yOD3a5Zs463reV0s3',
  }),
  serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/2890bbb5-85ff-4e9d-9152-3a4d59f660b8',
});

module.exports = {languageTranslator};