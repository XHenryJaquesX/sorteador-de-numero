function sortear()
{
    let quantidadeDeNumeros = parseInt(document.getElementById(`quantidade`).value);
    let doNumero = parseInt(document.getElementById(`de`).value);
    let ateONumero = parseInt(document.getElementById(`ate`).value);

    let numerosSorteados = [];

    if (quantidadeDeNumeros > (ateONumero - doNumero + 1))
        {
            alert(`Erro! Você está tentando sortear mais números do que existem no intervalo selecionado!`);
        } else
            {
                for (let i = 0; i < quantidadeDeNumeros; i++)
                {
                    let numero = sortearNumero(doNumero, ateONumero);

                    while(numerosSorteados.includes(numero)){
                        numero = sortearNumero(doNumero, ateONumero);
                    }

                    numerosSorteados.push(numero);
                }

                let resultado = document.getElementById(`resultado`);

                resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;

                ativarBotao();
            }

}


function sortearNumero(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ativarBotao()
{
    let botao = document.getElementById(`btn-reiniciar`);
    if(botao.classList.contains(`container__botao-desabilitado`))
        {
            botao.classList.remove(`container__botao-desabilitado`);
            botao.classList.add(`container__botao`);
        }
}

function desativarBotao()
{
    let botao = document.getElementById(`btn-reiniciar`);
    if(botao.classList.contains(`container__botao`))
    {
        botao.classList.remove(`container__botao`);
        botao.classList.add(`container__botao-desabilitado`);
    }
}

function reiniciar()
{
    document.getElementById(`quantidade`).value = ``;
    document.getElementById(`de`).value = ``;
    document.getElementById(`ate`).value = ``;
    document.getElementById(`resultado`).innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    desativarBotao();
}