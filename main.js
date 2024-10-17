const palavras = ["cafe", "espresso", "latte", "cappuccino", "mocha", "americano", "aroma", "grao", "torrefacao", "filtrado", "prensa", "moka", "barista", "cafe da manha", "cha", "sabor", "cremoso", "filtro", "cafe gelado", "cafe coado", "soluvel", "blend", "robusta", "arabica", "cafe aromatizado", "descafeinado", "organico", "gourmet", "crema", "solo", "cafe com leite", "mug", "bica", "pingo", "doses", "turco", "moagem", "extracao", "sustentavel", "cafeteria", "xicara", "acucar", "creme", "chocolate", "sombra", "frances", "gelado", "bico", "cafeina", "saca", "macchiato", "aromatico", "especiarias", "da tarde", "infusao", "degustacao", "senso", "origem", "artesanal", "equilibrado", "encorpado", "filtragem", "torra", "liofilizado", "baunilha", "canela", "da casa", "despertar", "relaxar", "momentos", "cafetao"];
let tentativasUsadas = 0;
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let palavraSecreta, palavraOculta;
let jogando;

iniciarJogo()

function iniciarJogo() {
    let botoes = document.getElementById('botoes');
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn-${value}' class="btn btn-outline-dark m-1" onclick='checarLetra("${value}")'>${value}</button>`;
    });
    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
       palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    desenharForca();
    document.getElementById('btnReiniciar').classList.add('d-none')
}

function checarLetra(letra) {
    console.log(letra)
}

function desenharForca() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 6;

    // Base da Forca
    ctx.beginPath();
    ctx.strokeStyle = '#006700';
    ctx.moveTo(20, canvas.height - 10);
    ctx.lineTo(180, canvas.height - 10);
    ctx.stroke();

    // Poste da Forca
    ctx.strokeStyle = '#4e2708';
    ctx.beginPath();
    ctx.moveTo(60, canvas.height - 10);
    ctx.lineTo(60, 20);
    ctx.stroke();

    // Trave
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(120, 20);
    ctx.stroke();

    // Corda
    ctx.beginPath();
    ctx.moveTo(120, 20);
    ctx.lineTo(120, 30);
    ctx.stroke();

    // Diagonal
    ctx.beginPath();
    ctx.moveTo(80, 20);
    ctx.lineTo(60, 40);
    ctx.stroke();
}