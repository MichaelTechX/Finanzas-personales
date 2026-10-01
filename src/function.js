import {actualizarGrafica} from "./grafico.js";

/*Estructura de objetos de gastose ingresos */



const coloresCat = {
    compras: "red",
    entretenimieto: "blue",
    hogar: "yellow",
    consumo: "orange",
    transporte: "purple",
    educacion: "lightblue",
    salud: "green",
    viajes: "cian",
    varios: "grey",
};

const Gastos = {
    lista: [
        {
            nombre: "Supermercado",
            categoria: "Comida",
            cantidad: 25000,
            fecha: {
                dia: 3,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Cine",
            categoria: "Entretenimiento",
            cantidad: 8500,
            fecha: {
                dia: 5,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Combustible",
            categoria: "Transporte",
            cantidad: 18000,
            fecha: {
                dia: 7,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Internet",
            categoria: "Servicios",
            cantidad: 12000,
            fecha: {
                dia: 10,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Zapatillas",
            categoria: "Ropa",
            cantidad: 45000,
            fecha: {
                dia: 12,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Almuerzo",
            categoria: "Comida",
            cantidad: 7500,
            fecha: {
                dia: 15,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Libro de programación",
            categoria: "Educación",
            cantidad: 16000,
            fecha: {
                dia: 18,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Electricidad",
            categoria: "Servicios",
            cantidad: 22000,
            fecha: {
                dia: 21,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Videojuego",
            categoria: "Entretenimiento",
            cantidad: 30000,
            fecha: {
                dia: 24,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Reparación de bicicleta",
            categoria: "Mantenimiento",
            cantidad: 27000,
            fecha: {
                dia: 28,
                mes: 9,
                anio: 2026
            }
        }
    ]
    total: 0,
};

const Ingresos = {
    lista: [
        {
            nombre: "Sueldo",
            categoria: "Trabajo",
            cantidad: 850000,
            fecha: {
                dia: 1,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Trabajo freelance",
            categoria: "Trabajo",
            cantidad: 120000,
            fecha: {
                dia: 4,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Venta de videojuego",
            categoria: "Ventas",
            cantidad: 45000,
            fecha: {
                dia: 6,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Venta de libro usado",
            categoria: "Ventas",
            cantidad: 18000,
            fecha: {
                dia: 9,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Proyecto freelance",
            categoria: "Trabajo",
            cantidad: 95000,
            fecha: {
                dia: 13,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Reembolso",
            categoria: "Reembolso",
            cantidad: 12500,
            fecha: {
                dia: 16,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Venta de componente PC",
            categoria: "Ventas",
            cantidad: 35000,
            fecha: {
                dia: 19,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Trabajo temporal",
            categoria: "Trabajo",
            cantidad: 70000,
            fecha: {
                dia: 22,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Premio de concurso",
            categoria: "Premios",
            cantidad: 50000,
            fecha: {
                dia: 25,
                mes: 9,
                anio: 2026
            }
        },
        {
            nombre: "Venta de accesorio",
            categoria: "Ventas",
            cantidad: 22000,
            fecha: {
                dia: 29,
                mes: 9,
                anio: 2026
            }
        }
    ]
    total: 0,
};

const nuevaEtiquetaGasto = (nombre, cantidad, nomCat) => {

    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className = "EGasto";
    nuevoElemento.dataset.categoria = nomCat;

    nuevoElemento.innerHTML = `<span class="nombreElemento">${nombre}</span>
                                <span class="cateElemento">${nomCat}</span>
                                <span class="cantElemento">$ ${cantidad}</span>`;

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
                                <span class="cateElemento">${nomCat}</span>
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
    Ingresos.lista.forEach(elem => {Ingresos.total += elem.cantidad});
    /*
    var cantT = 0;
    document.querySelectorAll(".listaGastos .EIngreso").forEach(elemento => {
        var cantActual = Number(elemento.querySelector(".cantElemento").textContent);
        cantT += cantActual;
    }); */
    document.querySelector(".DIngresos .cantTotal").textContent = Ingresos.total; /*cantT;*/
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




















