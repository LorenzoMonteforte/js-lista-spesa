// Array lista della spesa
const listaSpesa = ["Olio", "Pasta", "Latte", "Burro", "Riso", "Panna", "Uova", "Aceto", "Pangrattato", "Limoni"];
// Stampa in pagina e in console la lista della spesa
let i = 0;
while(i<listaSpesa.length){
    const div = document.createElement("div");
    div.textContent = listaSpesa[i];
    document.body.appendChild(div);
    console.log(listaSpesa[i]);
    i++;
}