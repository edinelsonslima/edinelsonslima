
// Alteração do html dentro do iframe .container
function pegarPagina(folder, file) {
    let container = document.querySelector('.container');
    container.src = `./views/${folder}/${file}.html`

    ocultaRedeSocialSobre(folder, file)
}

// Ocultar redes sociais do index na pagina sobre
function ocultaRedeSocialSobre(folder, file) {
    let social = document.querySelector(".sociais")
    if(folder == "about" || file == "sobre"){
        social.style.visibility = "hidden"
    } else {
        social.style.visibility = "visible"

    }
}

// Mudança de lado da arrow do sidebar
function alterarArrow() {
    const inputArrow = document.querySelector('#checkbox')
    const arrowLeft = document.querySelector('#arrow-left')
    const arrowRight = document.querySelector('#arrow-right')

    if (inputArrow.checked) {
        setTimeout(() =>{
            arrowLeft.style.visibility = 'hidden'
            arrowRight.style.visibility = 'visible'
        }, 500)
    }
    else {
            arrowRight.style.visibility = 'hidden'
            arrowLeft.style.visibility = 'visible'
    }
}


// Recolher menu bar automaticamente em dispositivos moveis
const checkboxMobile = document.querySelector('#checkbox-menu-toggle')

checkboxMobile.addEventListener('change', () => {
    let options = document.querySelectorAll('ul.aside-options li')
    options.forEach(function (option){
        option.onclick = () => {
            checkboxMobile.checked = false;
        }
    })
})