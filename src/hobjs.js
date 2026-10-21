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
    lista: [
        {
            nombre: "Supermercado",
            categoria: "Comida",
            cantidad: 25000,
            tipo: "gasto",
            fecha: "2026-09-03"
        },
        {
            nombre: "Cine",
            categoria: "Entretenimiento",
            cantidad: 8500,
            tipo: "gasto",
            fecha: "2026-09-05"
        },
        {
            nombre: "Combustible",
            categoria: "Transporte",
            cantidad: 18000,
            tipo: "gasto",
            fecha: "2026-09-07"
        },
        {
            nombre: "Internet",
            categoria: "Servicios",
            cantidad: 12000,
            tipo: "gasto",
            fecha: "2026-09-10"
        },
        {
            nombre: "Zapatillas",
            categoria: "Ropa",
            cantidad: 45000,
            tipo: "gasto",
            fecha: "2026-09-12"
        },
        {
            nombre: "Almuerzo",
            categoria: "Comida",
            cantidad: 7500,
            tipo: "gasto",
            fecha: "2026-09-15"
        },
        {
            nombre: "Libro de programación",
            categoria: "Educación",
            cantidad: 16000,
            tipo: "gasto",
            fecha: "2026-09-18"
        },
        {
            nombre: "Electricidad",
            categoria: "Servicios",
            cantidad: 22000,
            tipo: "gasto",
            fecha: "2026-09-21"
        },
        {
            nombre: "Videojuego",
            categoria: "Entretenimiento",
            cantidad: 30000,
            tipo: "gasto",
            fecha: "2026-09-24"
        },
        {
            nombre: "Reparación de bicicleta",
            categoria: "Mantenimiento",
            cantidad: 27000,
            tipo: "gasto",
            fecha: "2026-09-28"
        }
    ],
    TPrecio: 0,
    TElementos: 10,
};


const Ingresos = {
    lista: [
        {
            nombre: "Sueldo",
            categoria: "Trabajo",
            cantidad: 850000,
            tipo: "ingreso",
            fecha: "2026-09-01"
        },
        {
            nombre: "Trabajo freelance",
            categoria: "Trabajo",
            cantidad: 120000,
            tipo: "ingreso",
            fecha: "2026-09-04"
        },
        {
            nombre: "Venta de videojuego",
            categoria: "Ventas",
            cantidad: 45000,
            tipo: "ingreso",
            fecha: "2026-09-06"
        },
        {
            nombre: "Venta de libro usado",
            categoria: "Ventas",
            cantidad: 18000,
            tipo: "ingreso",
            fecha: "2026-09-09"
        },
        {
            nombre: "Proyecto freelance",
            categoria: "Trabajo",
            cantidad: 95000,
            tipo: "ingreso",
            fecha: "2026-09-13"
        },
        {
            nombre: "Reembolso",
            categoria: "Reembolso",
            cantidad: 12500,
            tipo: "ingreso",
            fecha: "2026-09-16"
        },
        {
            nombre: "Venta de componente PC",
            categoria: "Ventas",
            cantidad: 35000,
            tipo: "ingreso",
            fecha: "2026-09-19"
        },
        {
            nombre: "Trabajo temporal",
            categoria: "Trabajo",
            cantidad: 70000,
            tipo: "ingreso",
            fecha: "2026-09-22"
        },
        {
            nombre: "Premio de concurso",
            categoria: "Premios",
            cantidad: 50000,
            tipo: "ingreso",
            fecha: "2026-09-25"
        },
        {
            nombre: "Venta de accesorio",
            categoria: "Ventas",
            cantidad: 22000,
            tipo: "ingreso",
            fecha: "2026-09-29"
        }
    ],
    TPrecio: 0,
    TElementos: 10,
};

const Historial = {
    lista: [
        {
            nombre: "Sueldo",
            categoria: "Trabajo",
            cantidad: 850000,
            tipo: "ingreso",
            fecha: "2026-09-01"
        },
        {
            nombre: "Supermercado",
            categoria: "Comida",
            cantidad: 25000,
            tipo: "gasto",
            fecha: "2026-09-03"
        },
        {
            nombre: "Trabajo freelance",
            categoria: "Trabajo",
            cantidad: 120000,
            tipo: "ingreso",
            fecha: "2026-09-04"
        },
        {
            nombre: "Cine",
            categoria: "Entretenimiento",
            cantidad: 8500,
            tipo: "gasto",
            fecha: "2026-09-05"
        },
        {
            nombre: "Venta de videojuego",
            categoria: "Ventas",
            cantidad: 45000,
            tipo: "ingreso",
            fecha: "2026-09-06"
        },
        {
            nombre: "Combustible",
            categoria: "Transporte",
            cantidad: 18000,
            tipo: "gasto",
            fecha: "2026-09-07"
        },
        {
            nombre: "Venta de libro usado",
            categoria: "Ventas",
            cantidad: 18000,
            tipo: "ingreso",
            fecha: "2026-09-09"
        },
        {
            nombre: "Internet",
            categoria: "Servicios",
            cantidad: 12000,
            tipo: "gasto",
            fecha: "2026-09-10"
        },
        {
            nombre: "Zapatillas",
            categoria: "Ropa",
            cantidad: 45000,
            tipo: "gasto",
            fecha: "2026-09-12"
        },
        {
            nombre: "Proyecto freelance",
            categoria: "Trabajo",
            cantidad: 95000,
            tipo: "ingreso",
            fecha: "2026-09-13"
        },
        {
            nombre: "Almuerzo",
            categoria: "Comida",
            cantidad: 7500,
            tipo: "gasto",
            fecha: "2026-09-15"
        },
        {
            nombre: "Reembolso",
            categoria: "Reembolso",
            cantidad: 12500,
            tipo: "ingreso",
            fecha: "2026-09-16"
        },
        {
            nombre: "Libro de programación",
            categoria: "Educación",
            cantidad: 16000,
            tipo: "gasto",
            fecha: "2026-09-18"
        },
        {
            nombre: "Venta de componente PC",
            categoria: "Ventas",
            cantidad: 35000,
            tipo: "ingreso",
            fecha: "2026-09-19"
        },
        {
            nombre: "Electricidad",
            categoria: "Servicios",
            cantidad: 22000,
            tipo: "gasto",
            fecha: "2026-09-21"
        },
        {
            nombre: "Trabajo temporal",
            categoria: "Trabajo",
            cantidad: 70000,
            tipo: "ingreso",
            fecha: "2026-09-22"
        },
        {
            nombre: "Videojuego",
            categoria: "Entretenimiento",
            cantidad: 30000,
            tipo: "gasto",
            fecha: "2026-09-24"
        },
        {
            nombre: "Premio de concurso",
            categoria: "Premios",
            cantidad: 50000,
            tipo: "ingreso",
            fecha: "2026-09-25"
        },
        {
            nombre: "Reparación de bicicleta",
            categoria: "Mantenimiento",
            cantidad: 27000,
            tipo: "gasto",
            fecha: "2026-09-28"
        },
        {
            nombre: "Venta de accesorio",
            categoria: "Ventas",
            cantidad: 22000,
            tipo: "ingreso",
            fecha: "2026-09-29"
        }
    ],
    TELementos: 20,
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











