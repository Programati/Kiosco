const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu)
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = ()=>{
    /*Creamos un elemento PARRAFO */
    const btnCerrar = document.createElement('p');
    /**Creamos un div */
    const overlay = document.createElement('div');
    /**Le agregamos una clase */
    overlay.classList.add('pantallaCompleta');
    /**Creamos una constante body, que es el body del html */
    const body = document.querySelector('body');
    /**Si clikeo varias veces antes de que la barra de navegacion aparezca, no me crea nuevos OVERLAY */
    if(document.querySelectorAll('.pantallaCompleta').length > 0) return;
    /**Le agregamos el div OVERLAY */
    body.appendChild(overlay);
    /*A dicho párrafo le asignamos la letra X */
    btnCerrar.textContent = 'x';
    /*Además le agregamos una clase */
    btnCerrar.classList.add('btnCerrar');
    /*Ahora inyectamos el párrafo al menu NAVEGACION */
    navegacion.appendChild(btnCerrar);
    /**Le pasamos el boton Cerrar y el div OVERLAY */
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton,overlay)=>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        /*Vamos a quitar del body el div OVERLAY */
        overlay.remove();
        /**Borramos el boton X de la barra de navegación */
        boton.remove();
    });
/**Agregamos la funcionalidad que al clickear fuera de la barra de navegacion, tambien se cierre la barra, como si le dieramos a la X */
    overlay.onclick = function(){
        /*Vamos a quitar del body el div OVERLAY */
        overlay.remove();
        /**Agregamos la clase ocultar a la barra de navegacion */
        navegacion.classList.add('ocultar');
        /**Borramos el boton X de la barra de navegación */
        boton.remove();
    }
}