var express = require('express');
var router = express.Router();
// Créer une instance de categorie.
const Categorie = require('../models/categorie');
// afficher la liste des categories.
router.get('/', async (req, res, )=> {
});
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
});
// chercher une catégorie
router.get('/:categorieId',async(req, res)=>{
});
// modifier une catégorie
router.put('/:categorieId', async (req, res)=> {
});
// Supprimer une catégorie
router.delete('/:categorieId', async (req, res)=> {
});
module.exports = router;