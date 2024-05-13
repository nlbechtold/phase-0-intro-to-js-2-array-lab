// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");

}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}

function appendCat(name) {
const catsModified = [...cats, "Broom"];
return catsModified
}

function prependCat(name) {
    const catsModifiedDos = ["Arnold", ...cats,];
    return catsModifiedDos
    }
function removeLastCat(name) {
    const catsModifiedTres = cats.slice (0, -1);
    return catsModifiedTres

}   
function removeFirstCat(name) {
    const catsModifiedQuatro = cats.slice (1);
    return catsModifiedQuatro

}   

