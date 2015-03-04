/**
 * methods page
 */

( function( window ) {

'use strict';

var MD = window.MD;
var MD2 = window.MD;
// var $ = window.jQuery;

var heroContainer;
var hero2Container;
var heroMasonry;
var hero2Masonry;
var loadMoreButton;

// --------------------------  -------------------------- //


MD.index = function() {

  // ----- hero ----- //

  ( function() {
    var hero = document.querySelector('#hero');
    var hero2 = document.querySelector('#hero2');
    
    heroContainer = hero.querySelector('.hero-masonry');
    hero2Container = hero2.querySelector('.hero-masonry');

    heroMasonry = new Masonry( heroContainer, {
      itemSelector: '.hero-item',
      columnWidth: '.grid-sizer'
    });

    hero2Masonry = new Masonry( hero2Container, {
      itemSelector: '.hero-item',
      columnWidth: '.grid-sizer'
    });

    getExamples();

  })();

  loadMoreButton = document.querySelector('#load-more-examples');

};

function getExamples() {

  var items = [];
  var items2 = [];
  var fragment = document.createDocumentFragment();
  var fragment2 = document.createDocumentFragment();
  var data = examplesData;
  var data2 = examplesData2;
  
  for ( var i=0, len = data.length; i < len; i++ ) {
    var item = makeExampleItem( data[i] );
    items.push( item );
    fragment.appendChild( item );
  }

  for ( var i=0, len = data2.length; i < len; i++ ) {
    var item = makeExampleItem2( data2[i] );
    items2.push( item );
    fragment2.appendChild( item );
  }

  imagesLoaded( fragment )
    .on( 'progress', function( imgLoad, image ) {
      var item = image.img.parentNode.parentNode;
      // debugger
      // console.dir( image.img.parentNode );
      heroContainer.appendChild( item );
      heroMasonry.appended( item );
    });

    imagesLoaded( fragment2 )
    .on( 'progress', function( imgLoad, image ) {
      var item = image.img.parentNode.parentNode;
      // debugger
      // console.dir( image.img.parentNode );
      hero2Container.appendChild( item );
      hero2Masonry.appended( item );
    });
}

var examplesData = [
   {
    title: "Dogs",
    image: 'images/imagesMargin/dogs.jpg'
  },
  {
    title: "Friends",
    image: "images/imagesMargin/friends.jpg"
  },
  {
    title: "Keeping Healthy",
    image: "images/imagesMargin/healthy.jpg"
  },
  {
    title: "Playing Games",
    image: "images/imagesMargin/games.jpg"
  },
  {
    title: "Programming",
    image: "images/imagesMargin/programming.jpg"
  },
  {
    title: "Learning New Languages",
    image: "images/imagesMargin/languages.jpg"
  },
  {
    title: "Traveling",
    image: "images/imagesMargin/traveling.jpg"
  },
  {
    title: "Cooking... and eating as well!",
    image: "images/imagesMargin/food.jpg"
  }
];

var examplesData2 = [
  {
    title: "Autism Travel Train",
    description: "MSc. project. A serious game which uses virtual reality to prepare individuals with Autism Spectrum Disorder to uses buses as a mean of transportation. Developed using Unity and Oculus Rift.",
    url: "",
    type: "",
    image: 'images/projectsMargin/TravelTrain.png'
  },
  {
    title: "Playsketch",
    description: "A racing game in a reality-extracted track. Developed with Unity.",
    url: "http://vimeo.com/89658037",
    type: "Watch",
    image: 'images/projectsMargin/Playsketch.png'
  },
  {
    title: "WallMotion",
    description: "A simple sandbox game using PrimeSense Sensor. Developed with Unity.",
    url: "https://vimeo.com/120284569",
    type: "Watch",
    image: 'images/projectsMargin/WallMotion.png'
  },
  {
    title: "Nittwit",
    description: "A platform game where you play as a mutant octopus. Developed in Action Script, Flash.",
    url: "http://1000webgames.com/arcade/nittwit.swf",
    type: "Play",
    image: 'images/projectsMargin/Nittwit.png'
  },
  {
    title: "SpyCook",
    description: "In this project recipes were used as a data source to perform data mining using a machine learning approach (clustering, topic modeling, classification and polarity analysis). Developed in Java.",
    url: "",
    type: "",
    image: 'images/projectsMargin/SIGC.png'
  },
  {
    title: "Semantic IMDB",
    description: "A web application that aims to explore browsing, semantic search and recommendation systems techniques with content extracted from IMDB. Developed using Java and MySQL.",
    url: "",
    type: "",
    image: 'images/projectsMargin/WS.png'
  },
  {
    title: "Reactive Pacman",
    description: "This project consisted of programming reactive agents, with distinct personalities, which would control the pacman and 3 ghosts in John DeNero's Pacman. Developed in Python.",
    url: "",
    type: "",
    image: 'images/projectsMargin/IIA.png'
  },
  {
    title: "IMDBSpy",
    description: "A web crawler which screen scraps information from IMDB and sends it, through a JBoss server, to another application. The latter writes the data to a PostgreSQL database using Java Persistence API and makes it available via a web application. This project was developed using Java, HTML5, and other technologies such as servlets, JSP and EJB.",
    url: "",
    type: "",
    image: 'images/projectsMargin/IS.png'
  }
];


function makeExampleItem( dataObj ) {
  var item = document.createElement('div');
  item.className = 'hero-item has-example is-hidden';
  var link = document.createElement('div');
  link.className = 'project-description';

  var img = document.createElement('img');
  img.src = dataObj.image;

  var title = document.createElement('p');
  title.className = 'example-title';
  title.textContent = dataObj.title;

  /*
  <img src="images/dogs.jpg" alt="dogs">
  <div class="image-description">
      <p>Dogs</p>
  </div>
  */

  link.appendChild( img );
  link.appendChild(title);
  item.appendChild( link )
  return item;
}

function makeExampleItem2( dataObj ) {

  var item = document.createElement('div');
  item.className = 'hero-item has-example2 is-hidden';
  var div = document.createElement('div');
  div.className = 'project-description';
  var img = document.createElement('img');
  img.src = dataObj.image;

  var title = document.createElement('p');
  title.className = 'example-title';
  title.textContent = dataObj.title;

  var description = document.createElement('p');
  description.textContent = dataObj.description;

  if (dataObj.url != ""){
    var contentlink = document.createElement('a');
    contentlink.href = dataObj.url;
    contentlink.textContent = dataObj.type + ' it here!';
    description.appendChild(contentlink);
  }

  /*
  <img src="images/projects/TravelTrain.png" alt="dogs">
  <p>Autism Travel Train</p>
  <p>A game with VR to rehabilitate individuals with autism. Developed using Unity and Oculus Rift.</p>
  */

  div.appendChild( img );
  div.appendChild( title );
  div.appendChild( description );
  item.appendChild( div )
  return item;

}

})( window );
