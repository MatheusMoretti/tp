var first = true;
function preSendhandler(event) {
  // When fetching the Welcome Node on startup, the context won't be defined, yet. If you want to add to
  // context when fetching welcome node, you will need to define the context.
  event.data.context.skills["main skill"] = event.data.context.skills["main skill"] || { user_defined: {} };
  event.data.context.skills["main skill"].user_defined.party_time = true;

  // You can OPTIONALLY return a promise and we will wait to continue processing until the promise is resolved. If
  // you return nothing we will immediately continue processing the event. If you fail the Promise we will cancel
  // sending the message.

  return new Promise(function (resolve) {
    if (!first) {
      var msg = event.data.input.text;
        $.post(
          "/ibmTranslate",
           { msg },
          function (returnedData, statusRequest) {
            event.data.input.text =returnedData.result.translations[0].translation;
              resolve();
          }
        );
    }
    else{
    first = false;
    resolve();
  }
  });
}

window.watsonAssistantChatOptions = {
  integrationID: "bfdfeee6-7044-4913-9ac0-9d8327cae5a3", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "0c3dd1a7-9e1d-4c26-a535-7c2a956f2fb7", // The ID of your service instance.
  onLoad: function (instance) {
    // Subscribe to the "pre:send" event.
    instance.on({ type: "pre:send", handler: preSendhandler });
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});