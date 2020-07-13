// Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// // Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

const button = document.getElementById('btn');
button.addEventListener('click', function () {
  const human = (function () {
    let name = document.getElementById('name').value;
    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let weight = document.getElementById('weight').value;
    let diet = document.getElementById('diet').value;

    function getName() {
      return name;
    }

    function getHeight() {
      return feet * 12 + inches;
    }

    function getWeight() {
      return weight;
    }

    function getDiet() {
      return diet;
    }

    return {
      name: getName(),
      height: getHeight(),
      weight: getWeight(),
      diet: getDiet()
    };
  })();

  const form = document.getElementById('dino-compare');
  form.innerHTML = '';

  const grid = document.getElementById('grid');
  const tile = document.createElement('div');
  tile.className = 'grid-item';
  tile.innerHTML = 'John';
  grid.appendChild(tile);
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
