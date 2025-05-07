const imagens = ['CAMISA.PNG', 'AZULEJOS.PNG', 'CANECAS.PNG', 'CANETAS.PNG'];
let indice = 0;
const banner = document.getElementById('banner');

setInterval(() => {
    banner.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % imagens.length;
        banner.src = './assets/' + imagens[indice];
        banner.style.opacity = 1;
    }, 500);
}, 4000);
