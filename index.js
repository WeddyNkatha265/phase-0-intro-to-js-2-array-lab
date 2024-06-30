// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function () {
  cats.push("Ralph");
  cats;
};

const destructivelyPrependCat = function () {
  cats.unshift("Bob");
  cats;
};

const destructivelyRemoveLastCat = function () {
  cats.pop();
  cats;
};

const destructivelyRemoveFirstCat = function () {
  cats.shift();
  cats;
};

function appendCat() {
  const updatedCats = [...cats, "Broom"];
  return updatedCats;
}

function prependCat() {
  const updatedPrependCats = ["Arnold", ...cats];
  return updatedPrependCats;
}

function removeLastCat() {
  const updatedRemoveLastCats = cats.slice(0, -1);
  return updatedRemoveLastCats;
}

function removeFirstCat() {
  const updatedRemoveFirstCats = cats.slice(1);
  return updatedRemoveFirstCats;
}
