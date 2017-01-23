console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpeg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

// Fruit buttons

var apple = document.querySelector('.Fruit--apple');
var orange = document.querySelector('.Fruit--orange');
var banana = document.querySelector('.Fruit--banana');

apple.addEventListener('click', function() {
  imgSrc=images.fruits.apple;
  document.querySelector('.Holder--fruit').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('fruit','apple');
});

orange.addEventListener('click', function() {
  imgSrc=images.fruits.orange;
  document.querySelector('.Holder--fruit').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('fruit','orange');
});

banana.addEventListener('click', function() {
  imgSrc=images.fruits.banana;
  document.querySelector('.Holder--fruit').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('fruit','banana');
});

// Dessert buttons

var icecream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');

icecream.addEventListener('click', function() {
  imgSrc=images.desserts.icecream;
  document.querySelector('.Holder--dessert').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('dessert','icecream');
});

cake.addEventListener('click', function() {
  imgSrc=images.desserts.cake;
  document.querySelector('.Holder--dessert').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('dessert','cake');
});

pie.addEventListener('click', function() {
  imgSrc=images.desserts.pie;
  document.querySelector('.Holder--dessert').innerHTML=('<img src="'+imgSrc+'"/>');
  combine('dessert','pie');
});

// Combine function

function combine(origin, selection) {
  if (origin==='fruit'){
    var dessertIngredient = document.querySelector('.Holder--dessert').innerHTML;
    if (dessertIngredient.includes("img")) {
      var start = dessertIngredient.indexOf("/")+1;
      var end = dessertIngredient.indexOf(".");
      dessertIngredient=dessertIngredient.substr(start,end-start).toLowerCase();
      var imgSrc = images.mixes[selection][dessertIngredient];
      document.querySelector('.Holder--result').innerHTML=('<img src="'+imgSrc+'"/>');
    }
  }
  if (origin==='dessert'){
    var fruitIngredient = document.querySelector('.Holder--fruit').innerHTML;
    if (fruitIngredient.includes("img")) {
      var start = fruitIngredient.indexOf("/")+1;
      var end = fruitIngredient.indexOf(".");
      fruitIngredient=fruitIngredient.substr(start,end-start).toLowerCase();
      var imgSrc = images.mixes[fruitIngredient][selection];
      document.querySelector('.Holder--result').innerHTML=('<img src="'+imgSrc+'"/>');
    }
  }
}

// Reset function
var reset = document.querySelector('.Reset');
reset.addEventListener('click', function() {
  document.querySelector('.Holder--fruit').innerHTML="";
  document.querySelector('.Holder--dessert').innerHTML="";
  document.querySelector('.Holder--result').innerHTML="";
});
