

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    e.preventDefault();
    if (tag === 'a') {
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('Error 404!');
    const html = await response.text();
    carregaResultado(html);


}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}