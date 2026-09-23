
const colorAleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};
const contarCate = (lista, cate, categorias) => {
    for (let i = 0; i < lista.length; i++){
        if (lista[i].dataset.categoria in cate){
            cate[lista[i].dataset.categoria] += 1;
        }
        else{
            cate[lista[i].dataset.categoria] = 1;
            categorias.push(lista[i].dataset.categoria);
        }
    };
};

const realizarGrafico = (canvas) => {
    const lista = document.querySelectorAll(".listaTotal li");
    let listCat = [];
    const categorias = {};
    const cantLista = lista.length;

    contarCate(lista, categorias, listCat);

    const ctx = canvas.getContext("2d");

    ctx.translate(canvas.width, canvas.height);
    ctx.scale(-1, -1);

    console.log(categorias);

    let radActual = 0;
    let radMod = 0;
    for (let i = 0; i < listCat.length; i++) {
        
        let elem = listCat[i];
        let porcentaje = categorias[elem]/cantLista;
        if(elem in categorias){
            
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

        }
    }
    

};

const graficar3 = () => {

    let canva = document.querySelector("#miGrafico");
    let sectCat = document.querySelector(".categorias");
    if(canva){
        console.log("Existe");
        canva.remove();
        canva = document.createElement("canvas");
        canva.className = "nuevoCanva";
        canva.id = "miGrafico";
        canva.width = 500;
        canva.height = 500;
        sectCat.appendChild(canva);
        realizarGrafico(canva);
    }
    else{
        canva = document.createElement("canvas");
        canva.className = "nuevoCanva";
        canva.id = "miGrafico";
        canva.width = 500;
        canva.height = 500;
        sectCat.appendChild(canva);
        realizarGrafico(canva);
    }



};





export const actualizarGrafica = () => {
    graficar3();
};





































