# ⚽ EPS Éval Football — ADP 2026
### Outil d'aide à la décision pédagogique — Maroc — CRMEF Souss-Massa

---

## 🚀 Déploiement GitHub Pages (étapes)

1. **Créer un dépôt GitHub** (ex: `adp2026-eps-football`)
2. **Placer ces fichiers à la racine** du dépôt :
   ```
   index.html   ← application principale
   sw.js        ← service worker (mode hors-ligne)
   manifest.json← métadonnées PWA
   README.md    ← ce fichier
   ```
3. **Activer GitHub Pages** :
   - Aller dans Settings → Pages
   - Source : branche `main`, dossier `/ (root)`
   - Cliquer **Save**
4. **URL de l'application** : `https://[votre-username].github.io/[nom-du-depot]/`

---

## ✅ Conditions de déploiement respectées

| # | Condition | Statut |
|---|-----------|--------|
| 1 | Architecture 100% statique, sans serveur | ✅ |
| 2 | Données privées et locales (localStorage) | ✅ |
| 3 | Persistance automatique (autosave) | ✅ |
| 4 | Responsive mobile (380px+) | ✅ |
| 5 | Bouton « Nouvelle session » avec confirmation | ✅ |
| 6 | Export/Import JSON de session complète | ✅ |
| 7 | Export CSV (UTF-8) + Excel (.xlsx) | ✅ |
| 8 | Données de démonstration (10 élèves) | ✅ |
| 9 | Chemins relatifs (`./`) | ✅ |
| 10 | Fichier `index.html` à la racine | ✅ |

---

## 🔒 Confidentialité des données

Toutes les données saisies restent **uniquement dans le navigateur** de l'enseignant (localStorage). Aucune donnée n'est transmise à un serveur externe. Chaque enseignant dispose de son propre espace de données, totalement indépendant.

---

## 📱 Fonctionnalités principales

- **6 niveaux scolaires** : 1AC, 2AC, 3AC, TC, 1BAC, 2BAC
- **4 domaines d'évaluation** : Procédural Collectif, Procédural Individuel, Comportemental, Conceptuel
- **Multi-classes** avec gestion de plusieurs groupes
- **Grille terrain** : génération + analyse IA (photo OCR)
- **Statistiques avancées** : histogramme, radar, box plot, diagnostic pédagogique
- **Import** : Excel (.xlsx), CSV, JSON, photo IA-OCR
- **Export** : Excel, CSV, JSON de sauvegarde
- **Mode hors-ligne** via Service Worker

---

## 📧 Contact

ADP 2026 — CRMEF Souss-Massa
