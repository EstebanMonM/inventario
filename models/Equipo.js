const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
    nombre: String,
    tipo: String,
    marca: String,
    modelo: String,
    estado: String,
    fecha_adquisicion: Date,
    ultimo_mantenimiento: Date
});

module.exports = mongoose.model('Equipo', equipoSchema);