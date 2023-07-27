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


//funcion para cambiar style a la pag//

const oscuro= document.querySelector('#modonocturno')

oscuro.addEventListener('click', function(){
    document.body.classList.toggle('modonocturno')
}
)


/*funcion menu hamburguesa*/

const nav= document.querySelector('#nav');
const open= document.querySelector('#open');
const close= document.querySelector('#close')

open.addEventListener('click',function(){
    nav.classList.add('visible');
})

close.addEventListener('click', function(){
    nav.classList.remove('visible');
})


