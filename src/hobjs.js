/*Estructura de objetos de gastose ingresos */

const colorAleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

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


const ordenarPorFecha = (objeto) => {
    objeto.lista.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
}

const coloresCat = {
    compras: "#FF0000",
    entretenimiento: "#0000FF",
    hogar: "#FFFF00",
    consumo: "#FFA500",
    transporte: "#800080",
    educacion: "#ADD8E6",
    salud: "#008000",
    viajes: "#00FFFF",
    varios: "#808080",
    comida: "#c92424",
    ventas: "#fcd998",
    alimentacion: "#FF6347",
    ropa: "#FF69B4",
    tecnologia: "#00CED1",
    servicios: "#FFD700",
    mascotas: "#A0522D",
    deportes: "#32CD32",
    libros: "#8A2BE2",
    regalos: "#FF1493",
    impuestos: "#696969",
    inversiones: "#228B22",
    mantenimiento: "#B8860B",
    combustible: "#DC143C",
    vivienda: "#D2691E",
    trabajo: "#4169E1"
};
const Gastos = {
    lista: [],
    TPrecio: 0,
    TElementos: 0,
};


const Ingresos = {
    lista: [],
    TPrecio: 0,
    TElementos: 0,
};

const Historial = {
    lista: [],
    TELementos: 0,
};



export {
    ordenarPorFecha,
    contarCate,
    colorAleatorio,
    Historial,
    Ingresos,
    Gastos,
    coloresCat,
};











