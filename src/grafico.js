import { coloresCat, contarCate, Historial, Ingresos, Gastos } from "./hobjs.js";

let LHistorial = [];
let VHistorial = {};
contarCate(Historial.lista, VHistorial, LHistorial);
/*
console.log("Lista Hsitorial", LHistorial);
console.log("Valores Historial", VHistorial);
console.log("Historial Complto", Historial);
*/



const canvas = document.querySelector(".categorias .grafica");

const grafico = new Chart(canvas, {
    type: "doughnut",

    data: {
        labels: LHistorial,

        datasets: [{
            label: "Historial",
            data: Object.values(VHistorial),
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom",
                borderColor: "red",
                labels: {
                    useBorderRadius: true,
                    usePointStyle: true,
                    pointStyle: "circle",
                    font: {
                        size: 18,
                        family: "Arial",
                        weight: "bold",
                        style: "normal"
                    },
                    textAligt: "center",
                    padding: 15,
                }
            }
        },
        manteinAspectRatio: false,
    }
});


export const actualizarGrafica = () => {
    let LHistorial = [];
    let VHistorial = {};
    contarCate(Historial.lista, VHistorial, LHistorial);
    grafico.data.labels = LHistorial;
    grafico.data.datasets[0].data = Object.values(VHistorial);
    grafico.update(); 
};





































