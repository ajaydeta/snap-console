// import Splide from '@splidejs/splide';
import Extension from './customTransition';
// import Transition from '...';
document.addEventListener('DOMContentLoaded', function () {
    var splide= new Splide('.splide', {
        arrows: false,
        trimSpace: false,
        autoWidth: true,
    }).mount( { Extension } );


});