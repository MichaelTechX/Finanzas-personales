import * as Datos from "../hobjs.js";

const canvas = document.querySelector(".categorias .grafica");
const ctx = canvas.getContext("2d");

ctx.translate(0, canvas.height + 90);





const listaCat = []; /* tendra todas lastodas las categorias del historial */
const cantCat = {};
const porsCate = {};

const contarCate = (lista, cate, categorias) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria in cate) {
            cate[lista[i].categoria] += 1;
        }
        else {
            cate[lista[i].categoria] = 1;
            categorias.push(lista[i].categoria);
        }
    };
};

const porcentajeCategorias = (total, listaCat, listaPors) => {
    const cien = total;
    const categorias = Object.keys(listaCat);
    for (let i = 0; i < categorias.length; i++) {
        const valor = ((listaCat[categorias[i]]) / cien) * 100;
        listaPors[categorias[i]] = valor;
    }


};



contarCate(Datos.Historial.lista, cantCat, listaCat);
porcentajeCategorias(Datos.Historial.TELementos, cantCat, porsCate);


const grafico = new Chart(canvas, {
    type: "bar",

    data: {
        labels: listaCat,

        datasets: [{
            label: "Categorias",
            data: Object.values(porsCate),
            backgroundColor: "Green",
        }]
    },

    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false,        //Permite que el grafico se adapte al espacio que se le asigno y no que adapte el espacio al grafico
    }
});

















