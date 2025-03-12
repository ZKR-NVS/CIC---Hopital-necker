# Hôpital Necker - Site Web

Site web professionnel pour l'Hôpital Necker, développé avec Next.js et Tailwind CSS.

## Technologies utilisées

- Next.js 14
- Tailwind CSS
- Framer Motion
- TypeScript

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/hopital-necker.git
cd hopital-necker
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Commandes Git

Pour mettre à jour le projet sur GitHub :

```bash
# Ajouter tous les fichiers modifiés
git add .

# Créer un commit avec un message descriptif
git commit -m "Mise à jour du site web : ajout des pages Services, À propos et Contact"

# Pousser les modifications vers GitHub
git push origin main
```

## Structure du projet

```
src/
  ├── app/
  │   ├── page.tsx           # Page d'accueil
  │   ├── services/
  │   │   └── page.tsx      # Page des services
  │   ├── a-propos/
  │   │   └── page.tsx      # Page À propos
  │   └── contact/
  │       └── page.tsx      # Page de contact
  ├── components/           # Composants réutilisables
  └── styles/              # Styles globaux
```

## Fonctionnalités

- Design responsive
- Animations avec Framer Motion
- Formulaire de contact
- Intégration Google Maps
- Sections interactives
- Navigation fluide

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 