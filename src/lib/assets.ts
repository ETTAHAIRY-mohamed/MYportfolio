/**
 * Préfixe un fichier du dossier /public avec le basePath du site
 * (GitHub Pages sert le portfolio sous /MYportfolio).
 */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
