# ⚡️ Bun Quotes API

Une API de citations aléatoires, ultra-légère, ultra-rapide et **100% Bun** — sans framework externe.

> 🧠 _"En tant que développeur full-stack, je suis toujours à l'affût des outils qui rendent notre quotidien plus fluide, plus rapide et plus agréable."_  
> 👉 Découvrez l'article complet : [Bun, le nouveau venu qui bouscule l’écosystème JavaScript](https://medium.com/@jeangabrielgoudiaby/bun-le-nouveau-venu-qui-bouscule-lécosystème-javascript-d834d2b6e3a3)

---

## 🎯 Objectifs pédagogiques

- Apprendre à créer un **serveur HTTP avec Bun** sans Express ou Fastify.
- Manipuler des **routes GET / POST** et retourner des données JSON.
- Utiliser la **hot reload** avec `bun --watch`.
- Servir une **interface HTML minimaliste** sans dépendance.
- Explorer les **performances et la simplicité** de Bun.

---

## 🗂️ Structure du projet

```

bun-quotes-api/
│
├── index.ts         # Serveur Bun + routes API
├── quotes.json      # Liste persistée de citations
├── public/
│   └── index.html   # Interface frontend simple
├── bunfig.toml      # Config Bun (facultatif)
└── README.md

```

---

## 🚀 Installation & exécution

### 1. Pré-requis

- [Installer Bun](https://bun.sh/docs/installation) si ce n’est pas déjà fait :

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Démarrage du serveur (avec hot reload)

```bash
bun --watch index.ts
```

### 3. Tester dans le navigateur ou via `curl`

#### Obtenir une citation aléatoire

```bash
curl http://localhost:3000/quote
```

#### Accéder à l’interface frontend

> 📍 [http://localhost:3000](http://localhost:3000)

---

## 👀 Exemple de réponse JSON

```json
{
  "quote": "Fais simple. Puis rends-le plus rapide."
}
```

---

## ✨ Fonctionnalités disponibles

| Fonction                       | Endpoint / Interface | Méthode |
| ------------------------------ | -------------------- | ------- |
| Obtenir une citation aléatoire | `/quote`             | GET     |
| Obtenir toutes les citations   | `/quotes`            | GET     |
| Ajouter une citation           | `/quote`             | POST    |
| Interface frontend légère      | `/`                  | GET     |

---

## 🛠️ Améliorations possibles

* ✅ Supprimer une citation (`DELETE /quote/:id`)
* ✅ Ajouter un système de vote (like/dislike)
* ✅ Afficher toutes les citations dans l’interface
* ✅ Créer une version mobile friendly
* ✅ Ajouter des tests unitaires avec `bun test`
* ✅ Refactoriser le code en modules (`routes/`, `services/`, etc.)

---

## ✅ Pourquoi ce projet est utile

| Fonctionalité         | Node.js traditionnel | Avec Bun    |
| --------------------- | -------------------- | ----------- |
| Serveur HTTP          | Express / Fastify    | Inclus      |
| JSON natif            | body-parser          | Inclus      |
| Démarrage             | lent + transpile     | Instantané  |
| Installation packages | npm install          | bun install |
| Hot reload            | nodemon / ts-node    | bun --watch |

---

## ✍️ Auteur

Made with ❤️ by [@Jeanga7](https://www.instagram.com/jeanga7/)
Article complet 👉 [Bun, le nouveau venu qui bouscule l’écosystème JavaScript](https://medium.com/@jeangabrielgoudiaby/bun-le-nouveau-venu-qui-bouscule-lécosystème-javascript-d834d2b6e3a3)

---

## 📄 Licence

Ce projet est open-source, sous licence [MIT](./LICENSE). 

---
