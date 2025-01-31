//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 
/*===============================================================================================*/
/* ÁREA DE VARIÁVEIS */
/*===============================================================================================*/
let amigos = [];
let nome = '';

/*===============================================================================================*/
/* ÁREA DE FUNÇÕES */
/*===============================================================================================*/
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    /*responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});*/
}
function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById('amigo');                   //captura o conteudo do campo do nome
    const novoAmigo = nomeDoAmigo.value;

    if (novoAmigo == '') {                                                  //verifica se o campo está vazio
        alert('ATENÇAO!!! Necessário digitar um nome !!! (o campo não pode estar vazio.)')
    } else {
        if (amigos.includes(novoAmigo)){                                    //verifica se o nome já consta no array
            alert('Este nome já consta na lista');                          //avisa usuário (pop-up em tela) que o nome já consta no array
            return                                                          //sai da função
        }
