var lastScrollTop = 0;
// El código fue tomado de stackoverflow como referencia y modificado para utilizarlo
// https://stackoverflow.com/questions/31223341/javascript-detecting-scroll-direction

this.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Cuando baja y es mayor a 100 agregamos la clase que coloca en blanco la navegación.
        if (st > 100) {
            document.getElementById('navigation').classList.add('white-nav');
            document.getElementById('sign-up').classList.remove('hide');
        } else {
            //Barra navegadora con el botón sign-up
            document.getElementById('navigation').classList.remove('white-nav');
            document.getElementById('sign-up').classList.add('hide');
        }
    } else {
        //Cuando sube y el scroll es menor a 100 quitamos la clase que coloca en blanco la navegación.
        if (st < 100) {
            document.getElementById('navigation').classList.remove('white-nav');
            document.getElementById('sign-up').classList.remove('hide');

        } else {

            document.getElementById('navigation').classList.add('white-nav');
            document.getElementById('sign-up').classList.add('hide');
        }
    }
    lastScrollTop = st;
}, false);