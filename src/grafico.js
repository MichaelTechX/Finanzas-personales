const listaElemts = document.querySelectorAll(".listaTotal li");
const cantLista = listaElemts.length;
let categoriasLista = [];

const categorias = {}

const listaCartegorias = document.querySelector(".categorias .listaCategorias");



const colorAleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};



for (let i = 0; i < listaElemts.length; i++){

    if (listaElemts[i].dataset.categoria in categorias){
        categorias[listaElemts[i].dataset.categoria] += 1;
    }
    else{
        categorias[listaElemts[i].dataset.categoria] = 1;
        categoriasLista.push(listaElemts[i].dataset.categoria);
    }
};





const canvas = document.querySelector("#miGrafico");
const ctx = canvas.getContext("2d");

ctx.translate(canvas.width, canvas.height);
ctx.scale(-1, -1);



const elementoCategoria = document.querySelector(".categorias .listaCategorias");
let radActual = 0;
let radMod = 0;
for (let i = 0; i < categoriasLista.length; i++) {
    let elem = categoriasLista[i];
    let porcentaje = categorias[elem]/cantLista;
    if(elem in categorias){
        const nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `<li>${elem}</li>`;
        
        radMod = radActual + Math.PI * 2 * porcentaje;
        const color = colorAleatorio();
        // Círculo
        ctx.beginPath();
        ctx.moveTo(240, 260);
        ctx.arc(240, 260, 180, radActual, radMod, false);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        radActual = radMod;
        elementoCategoria.appendChild(nuevoElemento);

    }
};





// Circulo blanco para dona
ctx.beginPath();
ctx.arc(240, 260, 100, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();






























