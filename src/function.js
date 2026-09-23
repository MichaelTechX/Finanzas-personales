import {actualizarGrafica} from "./grafico.js";


const nuevaEtiquetaGasto = (nombre, cantidad, nomCat) => {

    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className = "EGasto";
    nuevoElemento.dataset.categoria = nomCat;

    nuevoElemento.innerHTML = `<span class="nombreElemento">${nombre}</span>
                                <span class="cantElemento">${cantidad}</span>`;

    if(lista){
        lista.appendChild(nuevoElemento);
        gastosTotales();
        actualizarGrafica();
    }
    

};

const nuevaEtiquetaIngreso = (nombre, cantidad, nomCat) => {
    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className = "EIngreso";
    nuevoElemento.dataset.categoria = nomCat;

    nuevoElemento.innerHTML = `<span class="nombreElemento">${nombre}</span>
                                <span class="cantElemento">${cantidad}</span>`
                            ;

    if(lista){
        lista.appendChild(nuevoElemento);
        ingresosTotales();
        actualizarGrafica();
    }
    
};

const listenner = (event) => {
    switch (event.target.className){
        case "BGasto":
            overlGasto.showModal();
            break;
        case "BIngreso":
            overlIngreso.showModal();
            break;
    };
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

const menuNuevoIngreso = (overl) => {
    const ECantidad = overl.querySelector(".cantidad");
    const ENombre = overl.querySelector(".nombre");
    const msnError = overl.querySelector("p");
    const categoria = overl.querySelector(".catCompras");
    const cantidad = Number(ECantidad.value);
    const nombre = ENombre.value;
    const nomCat = categoria.value;

    if(cantidad != "" && !Number.isNaN(cantidad)){
        nuevaEtiquetaIngreso(nombre, cantidad, nomCat);
        if(msnError){
            if(msnError.classList.contains("view")){
                msnError.classList.toggle("view");
                msnError.classList.toggle("hide");
            }
        }
        ECantidad.value = "";
        ENombre.value = "";
        overl.close();
    }
    else{
        if(msnError){
            if (msnError.classList.contains("hide")){
                msnError.classList.toggle("hide");
                msnError.classList.toggle("view");
            }
        }
    }
};

const menuNuevoGasto = (overl) => {
    const ECantidad = overl.querySelector(".cantidad");
    const ENombre = overl.querySelector(".nombre");
    const categoria = overl.querySelector(".catCompras");
    const msnError = overl.querySelector("p");
    const cantidad = Number(ECantidad.value);
    const nombre = ENombre.value;
    const nomCat = categoria.value;
    

    if(cantidad != "" && !Number.isNaN(cantidad)){
        nuevaEtiquetaGasto(nombre, cantidad, nomCat);
        if(msnError){
            if(msnError.classList.contains("view")){
                msnError.classList.toggle("view");
                msnError.classList.toggle("hide");
            }
        }
        ECantidad.value = "";
        ENombre.value = "";
        overl.close();
    }
    else{
        if(msnError){
            if (msnError.classList.contains("hide")){
                msnError.classList.toggle("hide");
                msnError.classList.toggle("view");
            }
        }
    } 
};

const guardarOverl = (overl) => {
    const nombreclase = overl.className;
    switch (nombreclase) {
        case "menuGasto":
            menuNuevoGasto(overl);
            break;
        case "menuIngreso":
            menuNuevoIngreso(overl);
            break;
    }
};

const overlListener = (overl) => {

    overl.addEventListener("click", (boton) => {
        const  nombre = boton.target.className;
        switch (nombre) {
            case "cerrar":
                overl.close();
                break;
            case "guardar":
                guardarOverl(overl);
                break;  
        };
    });


};




const lista = document.querySelector(".listaGastos .opcB");
const overlIngreso = document.querySelector(".menuIngreso");
const overlGasto = document.querySelector(".menuGasto");


actualizarGrafica();
gastosTotales();
ingresosTotales();
overlListener(overlIngreso);
overlListener(overlGasto);
lista.addEventListener("click", listenner);




















