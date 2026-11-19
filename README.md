# Portfolio – Ettahairy Mohamed

Portfolio de **Ettahairy Mohamed**, développeur Full-Stack & Mobile (Flutter, Spring Boot, Angular), en Master 2 Systèmes Intelligents, Mobiles et Embarqués à l'Université de Rouen et à la recherche d'un stage de fin d'études (PFE).

Site statique au design « luxe » (noir profond et or champagne, typographie serif Cormorant Garamond + Inter), développé avec Next.js, TypeScript et Tailwind CSS, déployé sur GitHub Pages.

## Technologies

- **Next.js 15** (export statique) · **TypeScript** · **Tailwind CSS**
- **Framer Motion** – animations (respecte « réduire les animations » du système)
- **Lucide React** – icônes
- **next/font** – polices auto-hébergées au build

## Sections

1. **Accueil** – présentation, portrait, chiffres clés animés, bandeau de technologies
2. **Expertise** – domaines, technologies par catégorie, langues, centres d'intérêt
3. **Parcours** – timeline des expériences professionnelles
4. **Projets** – réalisations filtrables (Full-Stack / Mobile)
5. **Formation** – cursus et certifications
6. **CV** – aperçu du CV, faits clés et téléchargement du PDF
7. **Contact** – coordonnées et formulaire (ouvre le client mail avec le message pré-rempli)

## Lancer en local

Prérequis : Node.js 20+.

```bash
npm install
npm run dev
```

Le site est servi sous `http://localhost:3000/MYportfolio` (le `basePath` correspond au nom du dépôt GitHub Pages).

```bash
npm run build   # génère le site statique dans ./out
```

## Où modifier le contenu

**Tout le texte est centralisé dans [`src/data/content.ts`](src/data/content.ts)** : profil et coordonnées, statistiques, compétences, expériences, projets, formation, certifications.

| Élément | Emplacement |
| --- | --- |
| Textes, expériences, projets, coordonnées | `src/data/content.ts` |
| Titre et description SEO, polices | `src/app/layout.tsx` |
| Couleurs (`ink`, `gold`, `ivory`), polices | `tailwind.config.ts` |
| Styles globaux, boutons, cartes | `src/app/globals.css` |
| Sections de la page | `src/components/sections/` |
| CV téléchargeable | `public/cv.pdf` |
| Aperçu du CV affiché dans la section CV | `public/cv-preview.jpg` |
| Portrait | `public/portrait.jpg` |

### Mettre à jour le CV

1. Remplacez `public/cv.pdf` par la nouvelle version.
2. Régénérez l'aperçu `public/cv-preview.jpg` (image de la 1re page du PDF, ~1400 px de large) : il est affiché tel quel dans la section CV et n'est pas recalculé automatiquement.

### Ajouter un lien « Code » ou « Démo » à un projet

Dans `src/data/content.ts`, renseignez `github` et/ou `demo` sur le projet : le bouton n'apparaît que si l'URL est présente.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.

## Contact

- Email : ettahairy.mohamed.1@gmail.com
- LinkedIn : [mohamed-ettahairy](https://www.linkedin.com/in/mohamed-ettahairy-173050336/)
- GitHub : [ETTAHAIRY-mohamed](https://github.com/ETTAHAIRY-mohamed)
- Localisation : Rouen, France
