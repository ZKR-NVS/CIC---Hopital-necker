# Site Web Hôpital Necker

Ce projet est un site web moderne pour l'Hôpital Necker, développé avec Next.js et Tailwind CSS.

## Technologies utilisées

- Next.js 14
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/hopital-necker.git
cd hopital-necker
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez les variables d'environnement nécessaires :
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api
```

4. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
src/
├── app/
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page des services
│   ├── a-propos/         # Page À propos
│   ├── contact/          # Page de contact
│   └── globals.css       # Styles globaux
├── components/           # Composants réutilisables
└── public/              # Assets statiques
```

## Commandes Git utiles

Pour contribuer au projet :

1. Créez une nouvelle branche :
```bash
git checkout -b feature/nom-de-la-feature
```

2. Ajoutez vos modifications :
```bash
git add .
```

3. Committez vos changements :
```bash
git commit -m "Description des modifications"
```

4. Poussez vers GitHub :
```bash
git push origin feature/nom-de-la-feature
```

## Déploiement

Le site est configuré pour être déployé sur Vercel. Pour déployer :

1. Connectez votre dépôt GitHub à Vercel
2. Configurez les variables d'environnement dans les paramètres du projet Vercel
3. Vercel déploiera automatiquement votre site à chaque push sur la branche principale

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 