const express = require('express');
const Equipo = require('../models/Equipo');
const router = express.Router();

// Obtener todos los equipos
router.get('/', async(req, res) => {
    try {
        const equipos = await Equipo.find();
        res.render('equipos/index', { equipos });
    } catch (error) {
        res.status(500).send('Error obteniendo equipos');
    }
});

// Formulario para crear equipo
router.get('/crear', (req, res) => {
    res.render('equipos/create');
});

// Crear equipo
router.post('/', async(req, res) => {
    try {
        const nuevoEquipo = new Equipo(req.body);
        await nuevoEquipo.save();
        res.redirect('/equipos');
    } catch (error) {
        res.status(500).send('Error creando equipo');
    }
});

// Formulario para editar equipo
router.get('/:id/editar', async(req, res) => {
    try {
        const equipo = await Equipo.findById(req.params.id);
        res.render('equipos/edit', { equipo });
    } catch (error) {
        res.status(500).send('Error obteniendo equipo');
    }
});

// Actualizar equipo
router.post('/:id', async(req, res) => {
    try {
        await Equipo.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/equipos');
    } catch (error) {
        res.status(500).send('Error actualizando equipo');
    }
});

// Eliminar equipo
router.post('/:id/eliminar', async(req, res) => {
    try {
        await Equipo.findByIdAndDelete(req.params.id);
        res.redirect('/equipos');
    } catch (error) {
        res.status(500).send('Error eliminando equipo');
    }
});

module.exports = router;