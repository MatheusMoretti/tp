var perguntaAtual = 0;
var numElemento = 0;

function nextQuestion() {
    var f = games; //escolha do usuario na tela principal de qual quiz ele quer
    var aleatorio;

    do {
        aleatorio = Math.floor((Math.random() * 10)); //fazer verificacao de qual ja foi
    } while (f[aleatorio] === undefined);

    //atualizar a var global do qual pergunta estamos 
    perguntaAtual = aleatorio;
    numElemento++;
    document.getElementById('quesTxt').innerHTML = "Você sabe qual 'nome do quiz (ex:jogo)' é esse ? Pergunta " + numElemento + "/10"
        //Atualizar a imagem da pergunta atual
    document.getElementById('displayText').innerHTML = "<img src=" + f[aleatorio].link + " width=" + "400px >";

    //Atualizar as respostas de acordo com a atual
    document.getElementById('res1').innerHTML = f[aleatorio].res1;
    document.getElementById('res2').innerHTML = f[aleatorio].res2;
    document.getElementById('res3').innerHTML = f[aleatorio].res3;
    document.getElementById('res4').innerHTML = f[aleatorio].res4;

}

var pontuacao = 0; //alterar para json depois
function qualApertei(id) {
    var f = games; //seleciona o json
    var resposta = f[perguntaAtual].resposta; //busca no json a string da resposta correta

    if (resposta == id) {
        pontuacao++;
        //adionar ponto de acerto, att json de po
        console.log(f);
        console.log(f.length);
        document.getElementById('pontuacao').innerHTML = "Pontuacao: " + pontuacao + " / 10";
    }

    //Deletando elemento do json para nao haver repeticao
    delete f[perguntaAtual];

    //Chama a proxima questão
    if (numElemento >= 10) {
        console.log("error");
        //ir para tela de final, pontuacao total e volta para a tela inicial
    } else {
        nextQuestion();
    }

}