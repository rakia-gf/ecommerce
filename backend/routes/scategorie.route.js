const express = require('express');
const router = express.Router();
const SCategorie = require("../models/scategorie");

// afficher la liste des s/catégories
router.get('/', async (req, res) => {
    try {
        const scat = await SCategorie.find().sort({ _id: -1 }).populate("categorieID");
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// créer une nouvelle s/catégorie
router.post('/', async (req, res) => {
    const { nomscategorie, imagescat, categorieID } = req.body;
    const newSCategorie = new SCategorie({ nomscategorie, imagescat, categorieID });
    try {
        await newSCategorie.save();
        res.status(201).json(newSCategorie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// chercher une sous-catégorie par ID
router.get('/:scategorieId', async (req, res) => {
    try {
        const scat = await SCategorie.findById(req.params.scategorieId).populate("categorieID");
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// modifier une s/catégorie
router.put('/:scategorieId', async (req, res) => {
    try {
        const scat = await SCategorie.findByIdAndUpdate(
            req.params.scategorieId,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(scat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// supprimer une s/catégorie
router.delete('/:scategorieId', async (req, res) => {
    try {
        await SCategorie.findByIdAndDelete(req.params.scategorieId);
        res.json({ message: "Sous-catégorie supprimée avec succès." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// chercher des sous-catégories par catégorie
router.get('/cat/:categorieID', async (req, res) => {
    try {
        const scat = await SCategorie.find({ categorieID: req.params.categorieID }).populate("categorieID");
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
