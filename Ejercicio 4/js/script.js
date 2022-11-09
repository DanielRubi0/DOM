let container__family = document.getElementById("container__family");

let people = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

people.forEach(create_child);

function create_child(data) {
    let parrafo = document.createElement("p");
    container__family.appendChild(parrafo);
    parrafo.innerHTML = data;
}
