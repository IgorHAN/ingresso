function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    if(tipo.value == "pista"){
        comprarPista(qtd);
    } else if(tipo.value == "inferior"){
        comprarInferior(qtd);
    } else if(tipo.value == "superior"){
        comprarSuperior(qtd);
    }

    }

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista){
        alert("Quantidade indisponível para tipo pista");
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada!");

    }

}

function comprarInferior(qtd){
    let qtdInf = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInf){
        alert("Quantidade indisponível para tipo Cadeira Inferior");
    } else{
        qtdInf = qtdInf - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInf;
        alert("Compra realizada!");

    }

}

function comprarSuperior(qtd){
    let qtdSup = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSup){
        alert("Quantidade indisponível para tipo Cadeira Superior");
    } else{
        qtdSup = qtdSup - qtd;
        document.getElementById("qtd-superior").textContent = qtdSup;
        alert("Compra realizada!");

    }

}