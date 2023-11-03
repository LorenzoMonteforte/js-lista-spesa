// Array lista della spesa
const listaSpesa = ["Olio", "Pasta", "Latte", "Burro", "Riso", "Panna", "Uova", "Aceto", "Pangrattato", "Limoni"];
// Stampa in pagina e in console la lista della spesa
const lista = document.getElementById("lista");
let i = 0;
while(i<listaSpesa.length){
    const li = document.createElement("li");
    li.textContent = listaSpesa[i];
    lista.appendChild(li);
    console.log(listaSpesa[i]);
    i++;
}