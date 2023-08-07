//Funcion para activar los item//

const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach
(function (item){
    item.addEventListener('click', function(e){
        const activeItem= document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active')
    });
})

console.log(menuItems);



/*funcion para cambiar MODO NOCTURNO a la pag*/

const botonoscuro= document.querySelector('.modonocturno')

botonoscuro.addEventListener('click', function () {
    botonoscuro.classList.toggle('oscuro');
    document.body.classList.toggle('oscuro');   
})

/*funcion MENU hamburguesa*/

const nav= document.querySelector('#nav');
const open= document.querySelector('#open');
const close= document.querySelector('#close')

open.addEventListener('click',function(){
    nav.classList.add('visible');
})

close.addEventListener('click', function(){
    nav.classList.remove('visible');
})


