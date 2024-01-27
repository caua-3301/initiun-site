// Função de callback que será chamada quando o elemento alvo for observado (entries é um array com funcionalidade)
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector("#about-the-project").classList.toggle('ativa-card');
            //Encerra a observação apos a primeira chamada
            observer.disconnect();
        } else {
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    //40%
    threshold: 0.4
};

//INstancia observer
const observer = new IntersectionObserver(handleIntersection, options);

const targetElement = document.getElementById('about-the-project');

//A partir da intancia, o metodo observe, monitora e aplica a callback
observer.observe(targetElement);