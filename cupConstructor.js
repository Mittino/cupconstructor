'use strict';

function Cup(color, material, size, description){
  this.color = color,
  this.material = material,
  this.size = size,
  this.description = description,
  this.cupFull = false
}

Cup.prototype.fillCup = function fillCup(){
  this.cupFull = true;
};

Cup.prototype.drinkBeverage = function drinkBeverage(){
  this.cupFull = false;
};

var redCup = new Cup('red', 'ceramic', 'small', 'mug');

console.log(redCup);
redCup.fillCup();
console.log(redCup);
redCup.drinkBeverage();
console.log(redCup);

var wineGlass = new Cup('clear', 'glass', 'med', 'wine glass');
var moscowMuleMug = new Cup('copper', 'copper', 'med', 'mug');
var espressoCup = new Cup('white', 'ceramic', 'tiny', 'espresso sipping cup');

console.log(wineGlass);
console.log(moscowMuleMug);
console.log(espressoCup);
