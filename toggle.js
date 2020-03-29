let navbar = document.getElementById('js-navbar-toggle');
    let menu = document.getElementById('js-menu');
    navbar.addEventListener('click', function(){
        menu.classList.toggle('active');
    })