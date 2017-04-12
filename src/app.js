import css from './app.scss';

<<<<<<< HEAD
=======

// var $ = require('jquery');

>>>>>>> ee021bda68194cda1765ad11e179b430c76fdd02
var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, $ );
// now you can use $().masonry()
$('.grid').masonry({
    itemSelector: '.grid-item',
});
