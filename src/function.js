import { actualizarGrafica } from "./grafico.js";
import { Gastos, Ingresos, Historial, ordenarPorFecha } from "./hobjs.js";


const nuevaEtiquetaGasto = (nombre, cantidad, nomCat, fecha) => {

    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className = "EGasto";
    nuevoElemento.dataset.categoria = nomCat;
    nuevoElemento.dataset.fecha = fecha;

    nuevoElemento.innerHTML = `
                                <span class="nombreElemento">${nombre}</span>
                                <span class="cateElemento">${nomCat}</span>
                                <span class="cantElemento">$ ${cantidad}</span>
                            `;

    if (lista) {

        const elementos = lista.children;

        let insertado = false;

        for (const elemento of elementos) {

            if (fecha > elemento.dataset.fecha) {
                lista.insertBefore(nuevoElemento, elemento);
                insertado = true;
                break;
            }
        }

        if (!insertado) {
            lista.appendChild(nuevoElemento);
        }

        gastosTotales();

    }





};

const nuevaEtiquetaIngreso = (nombre, cantidad, nomCat, fecha) => {
    const lista = document.querySelector(".listaTotal");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className = "EIngreso";
    nuevoElemento.dataset.categoria = nomCat;
    nuevoElemento.dataset.fecha = fecha;

    nuevoElemento.innerHTML = `
                                <span class="nombreElemento">${nombre}</span>
                                <span class="cateElemento">${nomCat}</span>
                                <span class="cantElemento">$ ${cantidad}</span>
                            `;

    if (lista) {

        const elementos = lista.children;

        let insertado = false;

        for (const elemento of elementos) {

            if (fecha > elemento.dataset.fecha) {
                lista.insertBefore(nuevoElemento, elemento);
                insertado = true;
                break;
            }
        }

        if (!insertado) {
            lista.appendChild(nuevoElemento);
        }

        gastosTotales();

    }
};

const listenner = (event) => {
    switch (event.target.className) {
        case "BGasto":
            overlGasto.showModal();
            break;
        case "BIngreso":
            overlIngreso.showModal();
            break;
    };
};

const ingresosTotales = () => {
    /* segunda version, con el uso de objetos solo necesita elacceso al atributo necesario */
    Ingresos.lista.forEach(elem => { Ingresos.TPrecio += elem.cantidad });
    document.querySelector(".DIngresos .cantTotal").textContent = Ingresos.TPrecio; /*cantT;*/
};

const gastosTotales = () => {

    Gastos.lista.forEach(elem => { Gastos.TPrecio += elem.cantidad });
    document.querySelector(".DGastos .cantTotal").textContent = Gastos.TPrecio;
};


const msnErrorMostrar = (overl) => {
    const msn = overl.querySelector("p");
    if (msn) {
        if (msn.classList.contains("hide")) {
            msn.classList.toggle("hide");
            msn.classList.toggle("view");
        }
    }

};

const msnErrorCerrar = (overl) => {
    const msn = overl.querySelector("p");
    if (msn) {
        if (msn.classList.contains("view")) {
            msn.classList.toggle("view");
            msn.classList.toggle("hide");
        }
    }
};

const menuNuevoIngreso = (overl) => {
    const ECantidad = overl.querySelector(".cantidad");
    const ENombre = overl.querySelector(".nombre");
    const msnError = overl.querySelector("p");
    const categoria = overl.querySelector(".catCompras");
    const EFecha = overl.querySelector(".fecha");

    const cantidad = Number(ECantidad.value);
    const nombre = ENombre.value;
    const nomCat = categoria.value;
    const fecha = EFecha.value;

    const nuevoObjeto = {
        nombre: nombre,
        categoria: nomCat,
        cantidad: cantidad,
        fecha: fecha,
    };


    if (cantidad != "" && !Number.isNaN(cantidad)) {
        Ingresos.lista.push(nuevoObjeto);
        Ingresos.TElementos++;
        Historial.lista.push(nuevoObjeto);
        Historial.TELementos++;
        nuevaEtiquetaGasto(nombre, cantidad, nomCat, fecha);
        actualizarGrafica();
        msnErrorCerrar(overl);
        ECantidad.value = "";
        ENombre.value = "";
        overl.close();
    }
    else {
        msnErrorMostrar(overl);
    }

};

const menuNuevoGasto = (overl) => {
    const ECantidad = overl.querySelector(".cantidad");
    const ENombre = overl.querySelector(".nombre");
    const categoria = overl.querySelector(".catCompras");
    const msnError = overl.querySelector("p");
    const EFecha = overl.querySelector(".fecha");

    const cantidad = Number(ECantidad.value);
    const nombre = ENombre.value;
    const nomCat = categoria.value;
    const fecha = EFecha.value;

    const nuevoObjeto = {
        nombre: nombre,
        categoria: nomCat,
        cantidad: cantidad,
        fecha: fecha,
    };



    if (cantidad != "" && !Number.isNaN(cantidad)) {
        Gastos.lista.push(nuevoObjeto);
        Gastos.TElementos++;
        Historial.lista.push(nuevoObjeto);
        Historial.TELementos++;
        nuevaEtiquetaGasto(nombre, cantidad, nomCat, fecha);
        actualizarGrafica();
        msnErrorCerrar(overl);
        ECantidad.value = "";
        ENombre.value = "";
        overl.close();
    }
    else {
        msnErrorMostrar(overl);
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
        const nombre = boton.target.className;
        switch (nombre) {
            case "cerrar":
                msnErrorCerrar(overl);
                overl.close();
                break;
            case "guardar":
                msnErrorCerrar(overl);
                guardarOverl(overl);
                break;
        };
    });


};


const mostrarHistorial = (historial) => {

    for (let i = historial.lista.length - 1; i >= 0; i--) {
        const object = historial.lista[i];

        if (object.tipo === "ingreso") {
            nuevaEtiquetaIngreso(object.nombre, object.cantidad, object.categoria, object.fecha);
        }
        else if (object.tipo === "gasto") {
            nuevaEtiquetaGasto(object.nombre, object.cantidad, object.categoria, object.fecha);
        }
    }

};




const lista = document.querySelector(".listaGastos .opcB");
const overlIngreso = document.querySelector(".menuIngreso");
const overlGasto = document.querySelector(".menuGasto");


//actualizarGrafica();
gastosTotales();
ingresosTotales();
overlListener(overlIngreso);
overlListener(overlGasto);
mostrarHistorial(Historial);
lista.addEventListener("click", listenner);




















