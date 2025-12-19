const mongoose = require("mongoose");
const Categorie = require("./categorie");

const scategorieSchema = mongoose.Schema({
    nomscategorie: { type: String, required: true },
    imagescat: { type: String, required: false },
    categorieID: { type: mongoose.Schema.Types.ObjectId, ref: 'categorie', required: true }
});

module.exports = mongoose.model('scategorie', scategorieSchema);
