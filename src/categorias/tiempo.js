import * as Datos from "../hobjs.js";

const LIngesos = [];
const LGastos = [];
const LHistorial = [];
const VIngresos = {};
const VGastos = {};
const VHistorial = {};

Datos.contarCate(Datos.Ingresos.lista, VIngresos, LIngesos);
Datos.contarCate(Datos.Gastos.lista, VGastos, LGastos);
Datos.contarCate(Datos.Historial.lista, VHistorial, LHistorial);


const canvas = document.querySelector(".tiempo .grafica");

const grafico = new Chart(canvas, {
    type: "bar",

    data: {
        labels: LHistorial,

        datasets: [{
            label: "Gastos",
            data: VGastos,
            backgroundColor: "Red",
        },
        {
            label: "Ingresos",
            data: VIngresos,
            backgroundColor: "blue",
        }
        ]
    },

    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false,
    }
});


const actualizarGI = () => {
    grafico.data.labels = LHistorial;
    grafico.data.datasets[0].data = VGastos;
    grafico.data.datasets[1].data = VIngresos;
};

/* 
const ALTO = 50;
const ANCHO = 50;
const INICIO_X = 0;
const INICIO_Y = 0;

const SUPERIOR = 40;
const INFERIOR = 40;
const IZQUIERDA = 20;
const DERECHA = 20;


const canvas = document.querySelector(".tiempo .grafica");
const ctx = canvas.getContext("2d");

const anchoG = canvas.width - IZQUIERDA - DERECHA;
const altoG = canvas.height - SUPERIOR - INFERIOR;

ctx.beginPath();

// Eje Y
ctx.moveTo(IZQUIERDA, SUPERIOR);
ctx.lineTo(IZQUIERDA, canvas.height - INFERIOR);

// Eje X
ctx.lineTo(canvas.width - DERECHA, canvas.height - INFERIOR);

ctx.strokeStyle = "#333333";
ctx.lineWidth = 2;
ctx.stroke();
ctx.textAlign = "center";
ctx.textBaseline = "top";

ctx.fillText(
    "Alimentación",
    IZQUIERDA + 50,
    canvas.height - INFERIOR + 10
);
*/