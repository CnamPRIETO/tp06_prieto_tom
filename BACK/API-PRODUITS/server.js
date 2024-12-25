const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; 

// Activer CORS
app.use(cors());

app.get('/api/produits', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'produits.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture de produits.json:', err);
            return res.status(500).json({ error: 'Erreur Interne du Serveur' });
        }
        const produits = JSON.parse(data);
        res.json(produits);
    });
});

app.listen(port, () => {
    console.log(`Serveur API produit en cours d'exécution à http://localhost:${port}`);
});
