const express = require('express');
const router = express.Router();
const Categorie = require('../models/categorie');

// afficher la liste des categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categorie.find().sort({ _id: -1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// créer une nouvelle catégorie
router.post('/', async (req, res) => {
    const { nomcategorie, imagecategorie } = req.body;
    const newCategorie = new Categorie({ nomcategorie, imagecategorie });
    try {
        await newCategorie.save();
        res.status(201).json(newCategorie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// chercher une catégorie par ID
router.get('/:categorieId', async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.categorieId);
        res.status(200).json(categorie);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// modifier une catégorie
router.put('/:categorieId', async (req, res) => {
    try {
        const updatedCategorie = await Categorie.findByIdAndUpdate(
            req.params.categorieId,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedCategorie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// supprimer une catégorie
router.delete('/:categorieId', async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.categorieId);
        res.json({ message: "Catégorie supprimée avec succès." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
