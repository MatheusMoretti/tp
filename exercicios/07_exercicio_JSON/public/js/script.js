function randomizar() {
    var f = games; //escolha do usuario na tela principal de qual quiz ele quer
    var aleatorio;

    do {
        aleatorio = Math.floor((Math.random() * 10)); //fazer verificacao de qual ja foi
    } while (f[aleatorio] === undefined);

    document.getElementById('displayText').innerHTML = "<img src=" + f[aleatorio].link + " width=" + "400px >";

    //Chamada para setar as respostas de acordo com 
    alternativas(aleatorio);

}

function alternativas(qual) {
    var f = games; //escolha do usuario na tela principal de qual quiz ele quer

    document.getElementById('res1').innerHTML = f[qual].res1;
    document.getElementById('res2').innerHTML = f[qual].res2;
    document.getElementById('res3').innerHTML = f[qual].res3;
    document.getElementById('res4').innerHTML = f[qual].res4;

    delete f[qual];
}