const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
//configuracao para o IBM Watson Assistant
const assistant = new AssistantV1({
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2020-01-04',
    authenticator: new IamAuthenticator({ apikey: 'QzgHOoJPIM9EwO8zMV8sSh4E_oVhCSl-0V54ijU9uCNi' })
});

module.exports = {assistant};