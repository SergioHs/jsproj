const secaoComentarios = document.getElementById('comments');

async function carregaComentarios(){
    //limpa o conteúdo atual da seção
    secaoComentarios.innerHTML = '';

    //obtem os comentarios e transforma em objeto JS
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comentarios = await response.json();

        if(comentarios.length > 50){
            comentarios.forEach(comentario => {
                //criei uma nova div
                const divComentario = document.createElement('div');
        
                //adicionei a essa nova div, a classe CSS 'comment' 
                divComentario.classList.add('comment');
                
                //dentro desta div criada, coloco o nome e corpo do comentario como HTML
                divComentario.innerHTML = `
                <h4>${comentario.name}</h4>
                <p>Post ID: ${comentario.postId}</p>
                <p>${comentario.body}</p>
                `;
        
                //anexar a div na seção
                secaoComentarios.appendChild(divComentario);
            });
        } else {
            secaoComentarios.innerHTML = 'Erro ilustrativo dos comentários';

        }
 
        
}
carregaComentarios();

const imagemDoBanner = document.getElementById('bannerImage');
const textoDoBanner = document.getElementById('bannerText');

console.log(imagemDoBanner);

const dadosDoBanner = [
    {image: 'https://placehold.co/600x400?text=Banner1', text: 'Primeiro banner'},
    {image: 'https://placehold.co/600x400?text=Banner2', text: 'Segundo banner'},
    {image: 'https://placehold.co/600x400?text=Banner3', text: 'Terceiro banner'},
    {image: 'https://placehold.co/600x400?text=Banner4', text: 'Quarto banner'}
];
let indiceBannerAtual = 0;

function atualizaBanner(indice){
    imagemDoBanner.src = dadosDoBanner[indice].image;
    textoDoBanner.textContent = dadosDoBanner[indice].text;
}

function prevClicked(){
    if(indiceBannerAtual == 0){
        indiceBannerAtual = dadosDoBanner.length - 1;
    } else {
        indiceBannerAtual = indiceBannerAtual - 1;
    }
    atualizaBanner(indiceBannerAtual);
}

function nextClicked(){
    if(indiceBannerAtual == dadosDoBanner.length - 1){
        indiceBannerAtual = 0;
    } else {
        indiceBannerAtual = indiceBannerAtual + 1;
    }
    atualizaBanner(indiceBannerAtual);
}

const myInterval = setInterval(nextClicked, 1000);

function myStopFunction() {
    clearInterval(myInterval);
}



/*function prevClicked(){
    indiceBannerAtual = ((indiceBannerAtual - 1) + dadosDoBanner.length) % dadosDoBanner.length;
    console.log(indiceBannerAtual);
    atualizaBanner(indiceBannerAtual);
}

function nextClicked(){
    indiceBannerAtual = (indiceBannerAtual + 1) % dadosDoBanner.length;
    atualizaBanner(indiceBannerAtual);
}*/
