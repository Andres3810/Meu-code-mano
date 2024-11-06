const rangos = [
    "Bronce I", "Bronce II", "Bronce III", "Plata I", "Plata II", "Plata III",
    "Oro I", "Oro II", "Oro III", "Platino I", "Platino II", "Platino III",
    "Diamante I", "Diamante II", "Diamante III", "Champion I", "Champion II", 
    "Champion III", "Grand Champion I", "Grand Champion II", "Grand Champion III", "SSL"
];

function obtenerRangoAleatorio() {
    return rangos[Math.floor(Math.random() * rangos.length)];
}

console.log(obtenerRangoAleatorio());
