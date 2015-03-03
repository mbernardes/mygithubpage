/**
 * methods page
 */

( function( window ) {

'use strict';

var MD = window.MD;
// var $ = window.jQuery;

var heroContainer;
var heroMasonry;
var loadMoreButton;

// --------------------------  -------------------------- //


MD.index = function() {

  // ----- hero ----- //

  ( function() {
    var hero = document.querySelector('#hero');
    heroContainer = hero.querySelector('.hero-masonry');
    heroMasonry = new Masonry( heroContainer, {
      itemSelector: '.hero-item',
      columnWidth: '.grid-sizer'
    });

    getExamples();

  })();

  loadMoreButton = document.querySelector('#load-more-examples');

};


function getExamples() {

  var items = [];
  var fragment = document.createDocumentFragment();
  var data = examplesData;
  for ( var i=0, len = data.length; i < len; i++ ) {
    var item = makeExampleItem( data[i] );
    items.push( item );
    fragment.appendChild( item );
  }

  imagesLoaded( fragment )
    .on( 'progress', function( imgLoad, image ) {
      var item = image.img.parentNode.parentNode;
      // debugger
      // console.dir( image.img.parentNode );
      heroContainer.appendChild( item );
      heroMasonry.appended( item );
    });
}

var examplesData = [
   {
    title: "Dogs",
    image: 'images/dogs.jpg'
  },
  {
    title: "Friends",
    image: "images/friends.jpg"
  },
  {
    title: "Keeping Healthy",
    image: "images/healthy.jpg"
  },
  {
    title: "Playing Games",
    image: "images/games.jpg"
  },
  {
    title: "Programming",
    image: "images/programming.jpg"
  },
  {
    title: "Learning New Languages",
    image: "images/languages.jpg"
  },
  {
    title: "Traveling",
    image: "images/traveling.jpg"
  },
  {
    title: "Cooking... and eating as well!",
    image: "images/food.jpg"
  }
];

function makeExampleItem( dataObj ) {
  var item = document.createElement('div');
  item.className = 'hero-item has-example is-hidden';
  var link = document.createElement('div');
  //link.href = dataObj.url;
  var img = document.createElement('img');
  img.src = dataObj.image;

  var title = document.createElement('p');
  title.className = 'example-title';
  title.textContent = dataObj.title;

  var imgdescription = document.createElement('div');
  imgdescription.className = 'image-description'; 

  var description = document.createElement('p');
  description.textContent = dataObj.title;

  /*
  <div class="image-description">
      <p>Dogs</p>
  </div>
  */

  imgdescription.appendChild(description);
  link.appendChild( img );
  link.appendChild(imgdescription);
  item.appendChild( link )
  //link.appendChild( title );
  return item;
}

})( window );
