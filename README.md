# Mon Premier Projet Node.js 

Ce projet est un serveur web statique simple développé en Node.js, utilisant les modules natifs `http`, `fs`, et `path`.

## Installation et Lancement

Pour cloner et exécuter ce projet localement, suivez ces étapes :

### 1. Cloner le dépôt
```bash
git clone [URL-DE-TON-DEPOT]
cd nodestud
npm install chalk
npm install nodemon --save-dev
nodemon 'nom du fichier'
---

Maintenant, la section "Lancement" utilise la commande **`npm start`**. Pour que cette commande fonctionne, tu dois ajouter un script dans ton fichier **`package.json`**.

Ouvre ton fichier `package.json` et ajoute la ligne `"start": "node app.js"` dans la section `"scripts"` :

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"  <--- AJOUTE CETTE LIGNE
  },