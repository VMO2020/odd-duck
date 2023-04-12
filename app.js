'use strict';
// console.log('works!');

// Selectors

// Data

const state = {
	products: [],
};

// Constructor
function Product(name, src) {
	this.name = name;
	this.src = src;
	this.views = 0;
	this.clicks = 0;
}

// Create products
let bag = new Product('bag', './assets/images/bag.jpg');
let banana = new Product('banana', './assets/images/banana.jpg');
let bathroom = new Product('bathroom', './assets/images/bathroom.jpg');
let boots = new Product('boots', './assets/images/boots.jpg');
let breakfast = new Product('breakfast', './assets/images/breakfast.jpg');
let bubblegum = new Product('bubblegum', './assets/images/bubblegum.jpg');
let chair = new Product('chair', './assets/images/chair.jpg');
let cthulhu = new Product('cthulhu', './assets/images/cthulhu.jpg');
let dogDuck = new Product('dog-duck', './assets/images/dog-duck.jpg');
let dragon = new Product('dragon', './assets/images/dragon.jpg');
let pen = new Product('pen', './assets/images/pen.jpg');
let petSweep = new Product('pet-sweep', './assets/images/pet-sweep.jpg');
let scissors = new Product('scissors', './assets/images/scissors.jpg');
let shark = new Product('shark', './assets/images/shark.jpg');
let sweep = new Product('sweep', './assets/images/sweep.jpg');
let tauntaun = new Product('tauntaun', './assets/images/tauntaun.jpg');
let unicorn = new Product('unicorn', './assets/images/unicorn.jpg');
let waterCan = new Product('water-can', './assets/images/water-can.jpg');
let wineGlass = new Product('wine-glass', './assets/images/wine-glass.jpg');

state.products.push(
	bag,
	banana,
	bathroom,
	boots,
	breakfast,
	bubblegum,
	chair,
	cthulhu,
	dogDuck,
	dragon,
	pen,
	petSweep,
	scissors,
	shark,
	sweep,
	tauntaun,
	unicorn,
	waterCan,
	wineGlass
);

console.log(state.products);
