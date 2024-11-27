let sections = document.quearyselectorAll('section');
let navlinks = document.quearyselectorAll('header nav ul li a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector(`header nav ul li  a [href*=${id}]`).classList.add('active');
            });
        };
    });
};