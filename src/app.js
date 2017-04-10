import css from './app.scss';


// var $ = require('jquery');

var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, $ );
// now you can use $().masonry()
$('.grid').masonry({
    itemSelector: '.grid-item',
});
