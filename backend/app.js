const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// 🔹 Import du router catégorie
const categorieRouter = require("./routes/categorie.route");
// 🔹 Import du router sous catégorie
const scategorieRouter =require("./routes/scategorie.route")
// 🔹 Import du router article
const articleRouter =require("./routes/article.route")
// ================= CONFIG =================
dotenv.config();

// ================= MIDDLEWARES =================
app.use(cors());
app.use(express.json()); // BodyParser

// ================= ROUTES =================

// Route test
app.get("/", (req, res) => {
    res.send("bonjour");
});

// 🔹 Route catégories
app.use('/api/categories', categorieRouter);
// 🔹 Route sous catégories
app.use('/api/scategories', scategorieRouter);
// 🔹 Route catégories
app.use('/api/articles', articleRouter);
// ================= DATABASE =================
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {
    console.log("DataBase Successfully Connected");
})
.catch(err => {
    console.log("Unable to connect to database", err);
    process.exit();
});

// ================= SERVER =================
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;
