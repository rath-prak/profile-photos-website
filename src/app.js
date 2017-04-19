import css from './app.scss';
import navToggle from './js/nav-toggle'
import navScrollTo from './js/navScrollTo'


// var $ = require('jquery');

var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, $ );
// now you can use $().masonry()
$('.grid').masonry({
    itemSelector: '.grid-item',
});


navToggle();
navScrollTo();
