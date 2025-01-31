const mitArray = ["Peter", "Troels", "Keld", "Mikkel"];

console.log(mitArray);

const nytArray = mitArray.map((element) => `<li>${element}</li>`);

console.log(nytArray);
