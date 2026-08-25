const nuevaEtiquetaGasto = (elemento) => {
    console.log("Nuevo Gasto");
    console.log(elemento.target.className);

    const lista = document.querySelector(".listaTotal");

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Gasto";

    if(lista){
        lista.appendChild(nuevoElemento);
    }

};

const nuevaEtiquetaIngreso = (elemento) => {
    console.log("Nuevo Gasto");
    console.log(elemento.target.className);

    const lista = document.querySelector(".listaTotal");

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Ingreso";

    if(lista){
        lista.appendChild(nuevoElemento);
    }
};

const listenner = (event) => {
    console.log(event.target.className)
    switch (event.target.className){
        case "BGasto":
            nuevaEtiquetaGasto(event);
            break;
        case "BIngreso":
            nuevaEtiquetaIngreso(event);
            break;
    };
};

const nuevoIG = () => {
    const lista = document.querySelector(".listaGastos .opcB");
    lista.addEventListener("click", listenner);
};

const ingresosTotales = ()  =>{
    var cantT = 0;
    document.querySelectorAll(".listaGastos .EIngreso").forEach(elemento => {
        var cantActual = Number(elemento.querySelector(".cantElemento").textContent);
        cantT += cantActual;
    }); 
    document.querySelector(".DIngresos .cantTotal").textContent = cantT;
};

const gastosTotales = ()  =>{
    var cantT = 0;
    document.querySelectorAll(".listaGastos .EGasto").forEach(elemento => {
        var cantActual = Number(elemento.querySelector(".cantElemento").textContent);
        cantT += cantActual;
    });
    document.querySelector(".DGastos .cantTotal").textContent = cantT;
};




const overlIngreso = document.querySelector(".menuIngreso");




gastosTotales();
ingresosTotales();
nuevoIG();





















