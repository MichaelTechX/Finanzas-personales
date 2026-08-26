const nuevaEtiquetaGasto = (elemento) => {
    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Gasto";

    if(lista){
        lista.appendChild(nuevoElemento);
        gastosTotales();
    }

};

const nuevaEtiquetaIngreso = (nombre, cantidad) => {
    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = `<li class="EIngreso"><span class="nombreElemento">${nombre}</span><span class="cantElemento">${cantidad}</span></li>`;

    if(lista){
        lista.appendChild(nuevoElemento);
        ingresosTotales();
    }
};

const listenner = (event) => {
    switch (event.target.className){
        case "BGasto":
            nuevaEtiquetaGasto(event);
            break;
        case "BIngreso":
            overlIngreso.showModal();
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

const menuNuevoIngreso = (overl) => {
    const ECantidad = overl.querySelector(".cantidad");
    const ENombre = overl.querySelector(".nombre");
    const msnError = overl.querySelector("p");
    const cantidad = Number(ECantidad.value);
    const nombre = ENombre.value;
    

    if(cantidad != "" && !Number.isNaN(cantidad)){
        nuevaEtiquetaIngreso(nombre, cantidad);
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


const overlListener = (overl) => {

    overl.addEventListener("click", (boton) => {
        const  nombre = boton.target.className;
        switch (nombre) {
            case "cerrar":
                overl.close();
                break;
            case "guardar":
                menuNuevoIngreso(overl);
                break;
        };
    });


};




const overlIngreso = document.querySelector(".menuIngreso");

overlListener(overlIngreso);
gastosTotales();
ingresosTotales();
nuevoIG();





















