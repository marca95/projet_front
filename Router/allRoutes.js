import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/js", "JS", "/pages/javascript.html"),
  new Route("/php", "PHP", "/pages/php.html"),
  new Route("/python", "python", "/pages/python.html")];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Projet front";