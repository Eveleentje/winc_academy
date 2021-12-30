// colors while loop

var i = 0;
const colors = ["yellow", "blue", "red", "orange"];
while (i < colors.length) {
console.log(colors[i]);
i++
}

// colors for loop

for (i = 0; i < colors.length; i++) {
  const colors = ["yellow", "blue", "red", "orange"];
  const listOfColors = colors[i];
  console.log(listOfColors);
}

// forEach method

colors.forEach(element => console.log(element));

// while and for loops took six and four lines of code respectively
// forEach took one line 
// other advantages: easier to read, and easier to write and understand

// looping through properties of an object

const Eveleen = {
  hair: 'brown',
  eyes: 'brown',
  age: 37,
  nationality: 'dutch',
  height: 1.58
};

for (const [key, value] of Object.entries(Eveleen)) {
  console.log(`${key}: ${value}`);
}

