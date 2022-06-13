function toggleBordaPrato(bloco) {
    //Pega todos os elementos que tem a classe .pratos e que tenha o .bordaVerde ao mesmo tempo
    //Se nenhum elemento estiver selecionado, birdaClicada vai retornar null.
    let bordaClicada = document.querySelector('.pratos .bordaVerde');
    let iconeVerificadoNaoSelecionado = bloco.querySelector('.esconder');  
    let iconeVerificadoSelecionado = bloco.querySelector('.bordaVerde .iconeVeriicado');
    
    //Verifica se existe algum elemento selecionado e remove a borda deles.
    //Ou seja, caso exista 1 ou mais com borda, revome a borda de todos
    if (bordaClicada !== null) {
        bordaClicada.classList.remove('bordaVerde');
    }

    //Adicione a borda apenas na div que foi clicada (chamou a função toggleBordaPrato)
    bloco.classList.add('bordaVerde');

    verificaSelecao();
}

function toggleBordaBebida(bloco) {
    let bordaClicada = document.querySelector('.bebidas .bordaVerde');
    if (bordaClicada !== null) {
        bordaClicada.classList.remove('bordaVerde');
    }
    bloco.classList.add('bordaVerde');

    verificaSelecao();
}

function toggleBordaSobremesa(bloco) {
    let bordaClicada = document.querySelector('.sobremesas .bordaVerde');
    if (bordaClicada !== null) {
        bordaClicada.classList.remove('bordaVerde');
    }
    bloco.classList.add('bordaVerde');

    verificaSelecao();
}

function verificaSelecao() {
    let botaoCinza = document.querySelector('.envio .botaoCinza');
    let botaoVerde = document.querySelector('.envio .botaoVerde');

    let pratosClicado = document.querySelector('.pratos .bordaVerde');
    let bebidasClicado = document.querySelector('.bebidas .bordaVerde');
    let sobremesasClicado = document.querySelector('.sobremesas .bordaVerde');

    if(pratosClicado && bebidasClicado && sobremesasClicado) {
        botaoCinza.classList.add('esconder');
        botaoVerde.classList.remove('esconder');
    }
}

function confirmacao() {
    let confirmacaoDoPedido = document.querySelector('.confirmacaoDoPedido');
    confirmacaoDoPedido.classList.remove('esconder');

    /* let pratoSelecionado = document.querySelector('.pratos .bordaVerde');
    let stringPratoSelecionado = document.querySelector('.pratos .nomeDoPrato');
    let confirmacaoPrato = document.querySelector('.confirmacaoPrato .prato');

    confirmacaoPrato.innerHTML = stringPratoSelecionado; */
    
    //Seleção do bloco selecionado
    let pratoSelecionado = document.querySelector('.pratos .bordaVerde');
    let bebidaSelecionada = document.querySelector('.bebidas .bordaVerde');
    let sobremesaSelecionada = document.querySelector('.sobremesas .bordaVerde');
    
    //Seleção das strings selecionadas
    let nomeDoPratoSelecionado = pratoSelecionado.querySelector('.pratos h1').innerHTML;
    let precoDoPratoSelecionado = pratoSelecionado.querySelector('.pratos h3').innerHTML;

    let nomeDaBebidaSelecionada = bebidaSelecionada.querySelector('.bebidas h1').innerHTML;
    let precoDaBebidaSelecionada = bebidaSelecionada.querySelector('.bebidas h3').innerHTML;

    let nomeDaSobremesaSelecionada = sobremesaSelecionada.querySelector('.sobremesas h1').innerHTML;
    let precoDaSobremesaSelecionada = sobremesaSelecionada.querySelector('.sobremesas h3').innerHTML;

    //Seleção das strings da caixa verde
    let nomeConfirmacaoPrato = document.querySelector('.confirmacaoPrato .nome');
    let precoConfirmacaoPrato = document.querySelector('.confirmacaoPrato .preco');

    let nomeConfirmacaoBebida = document.querySelector('.confirmacaoBebida .nome');
    let precoConfirmacaoBebida = document.querySelector('.confirmacaoBebida .preco');

    let nomeConfirmacaoSobremesa = document.querySelector('.confirmacaoSobremesa .nome');
    let precoConfirmacaoSobremesa = document.querySelector('.confirmacaoSobremesa .preco');

    let stringConfirmacaoTotal = document.querySelector('.confirmacaoTotal .preco');
    
    //Conversão dos preços para Number
    precoDoPratoSelecionado = Number(precoDoPratoSelecionado).toFixed(2);
    precoDaBebidaSelecionada = Number(precoDaBebidaSelecionada).toFixed(2);
    precoDaSobremesaSelecionada = Number(precoDaSobremesaSelecionada).toFixed(2);
    
    //Adicionando o nome e o preço dos selecionados na caixa verde
    nomeConfirmacaoPrato.innerHTML = nomeDoPratoSelecionado;
    precoConfirmacaoPrato.innerHTML = precoDoPratoSelecionado;

    nomeConfirmacaoBebida.innerHTML= nomeDaBebidaSelecionada;
    precoConfirmacaoBebida.innerHTML = precoDaBebidaSelecionada;

    nomeConfirmacaoSobremesa.innerHTML = nomeDaSobremesaSelecionada;
    precoConfirmacaoSobremesa.innerHTML = precoDaSobremesaSelecionada;

    //Cálculo do Total
    let calculoTotal = (Number(precoDoPratoSelecionado) + Number(precoDaBebidaSelecionada) + Number(precoDaSobremesaSelecionada)).toFixed(2);
    stringConfirmacaoTotal.innerHTML = calculoTotal;
}

function envioWhatsapp() {
    //Seleção do bloco selecionado
    let pratoSelecionado = document.querySelector('.pratos .bordaVerde');
    let bebidaSelecionada = document.querySelector('.bebidas .bordaVerde');
    let sobremesaSelecionada = document.querySelector('.sobremesas .bordaVerde');

    //Seleção das strings selecionadas
    let nomeDoPratoSelecionado = pratoSelecionado.querySelector('.pratos h1').innerHTML;
    let precoDoPratoSelecionado = pratoSelecionado.querySelector('.pratos h3').innerHTML;

    let nomeDaBebidaSelecionada = bebidaSelecionada.querySelector('.bebidas h1').innerHTML;
    let precoDaBebidaSelecionada = bebidaSelecionada.querySelector('.bebidas h3').innerHTML;

    let nomeDaSobremesaSelecionada = sobremesaSelecionada.querySelector('.sobremesas h1').innerHTML;
    let precoDaSobremesaSelecionada = sobremesaSelecionada.querySelector('.sobremesas h3').innerHTML;

    //Conversão dos preços para Number
    precoDoPratoSelecionado = Number(precoDoPratoSelecionado).toFixed(2);
    precoDaBebidaSelecionada = Number(precoDaBebidaSelecionada).toFixed(2);
    precoDaSobremesaSelecionada = Number(precoDaSobremesaSelecionada).toFixed(2);

    //Cálculo do Total
    let calculoTotal = (Number(precoDoPratoSelecionado) + Number(precoDaBebidaSelecionada) + Number(precoDaSobremesaSelecionada)).toFixed(2);

    let texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeDoPratoSelecionado}
    - Bebida: ${nomeDaBebidaSelecionada}
    - Sobremesa: ${nomeDaSobremesaSelecionada}
    Total: R$ ${calculoTotal}`;
    texto = encodeURIComponent(texto);

    let link = "https://wa.me/5521988930938?text=" + texto;
    console.log(link);
    {window.open(link)};
}

function cancelar() {
    let confirmacaoDoPedido = document.querySelector('.confirmacaoDoPedido');
    confirmacaoDoPedido.classList.add('esconder');
}

/* function verificaSelecao() {
    let botaoCinza = document.querySelector('.envio .botaoCinza');
    let botaoVerde = document.querySelector('.envio .botaoVerde');

    let pratoClicado = document.querySelector('.prato .bordaVerde');
    let bebidaClicado = document.querySelector('.bebida .bordaVerde');
    let sobremesaClicado = document.querySelector('.sobremesa .bordaVerde');

    if (pratoClicado && bebidaClicado && sobremesaClicado) {
        botaoCinza.classList.add('esconder')
        botaoVerde.classList.remove('esconder');
    }
} */










/* 
  function toggleBordaBebida(bloco) {
    const bordaClicada = document.querySelector(".bordaVerde");
    
    if (bordaClicada !== null) {
        bordaClicada.classList.remove("bordaVerde");
    }

    bloco.classList.add("bordaVerde");
    let flagBebida = true;
    verificaSelecao(flagBebida);
  }

  function finalizar() {
      console.log(flagPrato);
  }

  function verificaSelecao(flagPrato, flagBebida) {

  const botaoCinza = document.querySelector(".botaoCinza");
  const botaoVerde = document.querySelector(".botaoVerde");
  if (flagPrato == true && flagBebida == true) {
    botaoCinza.classList.add("esconder");
    botaoVerde.classList.remove("esconder");
    
  }

}
 */




