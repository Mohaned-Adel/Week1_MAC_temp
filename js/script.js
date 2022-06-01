
var dropicon = document.getElementById('drop-bt');
let navList = document.getElementById('nav-list');
let navBar = document.querySelector('#nav-bar');
let closeTag = document.querySelector('.close');

dropicon.addEventListener('click', function() {
    navList.classList.toggle('active');
});

closeTag.addEventListener('click', function() {
    navList.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    navBar.classList.toggle('scrolling-active', window.scrollY > 0 );
})