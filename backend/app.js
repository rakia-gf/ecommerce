// ================= IMPORTS =================
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// ================= CONFIG =================
dotenv.config();

// ================= MIDDLEWARES =================
app.use(cors());
app.use(express.json()); // pour parser le body en JSON
app.use(express.static(__dirname + '/'));
// ================= ROUTERS =================
// 🔹 Import des routes
const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");
const userRouter = require("./routes/user.route");

// ================= ROUTES =================
// Route test
app.get("/", (req, res) => {
    res.send("Bonjour, le serveur fonctionne !");
});

// Routes API
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);

// ================= DATABASE =================
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {
    console.log("Database successfully connected");
})
.catch(err => {
    console.log("Unable to connect to database", err);
    process.exit();
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
