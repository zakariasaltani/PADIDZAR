# PADIDZAR V4.1

Plateforme institutionnelle Node.js/Express/PostgreSQL/PostGIS pour le suivi physique, financier, E&S, documentaire et géoportail.

## Lancement
1. Vérifier la base `padidzar_db`
2. `npm install`
3. `npm run db:test`
4. `npm start`
5. Ouvrir `http://localhost:3000`

## Compte admin
- login: `admin`
- mot de passe: `admin123`

## Fonctions V4
- CRUD sur modules référentiels et métiers
- interface groupée par thèmes
- administration des utilisateurs
- exports Excel et PDF
- import Excel pour projets, activités, budgets, marchés, paiements, utilisateurs
- géoportail thématique Leaflet
- impression
- upload documentaire


## V4.6.6
- Formulaire Paiements amélioré avec décompte lisible (numéro | marché | net)
- Filtrage des décomptes par marché
- Champ exercice maintenu et guidé
