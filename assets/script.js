const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//on recupère tous les elements avec la class arrow
let arrows = document.getElementsByClassName("arrow");

//on recupère un par un les elements du tableau

for (let i = 0; i < arrows.length; i++) {
  const arrow = arrows[i];
  //ajouter un evennement de clique a l'element
  arrow.addEventListener("click", function () {
    clicker(arrow); // this::: moi meme
  });
}

//function a executer lors d'un click sur une arrow
function clicker(arrow) {
  //on recupere la liste des classes du arrow  sur lequel on a cliqué
  /// et on vérifie s'il contient arrow_right
  if (arrow.classList.contains("arrow_right")) {
    clickDroit();
  } else {
    clickGauche();
  }
}

//function a executer lors d'un clic a droite
function clickDroit() {
  console.log("droite");

  let indice; // variable pur garder en memoir plus tard l'indice du point qui doit passer a blanc (actif)

  let dots = document.getElementsByClassName("dot"); // on recupere tous les elements html de class dot

  //on recupère un par un les elements du tableau dots
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]; // un point

    if (dot.classList.contains("dot_selected")) {
      // si le point est selectionné
      dot.classList.remove("dot_selected"); //on le desselectionne
      indice = i + 1; //on garde en memoir l'indice du point suivant
      break; //on arrete la boucle car on a trouver le point qu'on cherchait
    }
  }

  if (indice >= dots.length) {
    // verifier si in a atteint la fin du slider et on remet a 0 (debut)
    indice = 0;
  }

  dots[indice].classList.add("dot_selected"); // mettre le nouveau point blanc (selecionné)
  let sliderCourrant = slides[indice]; // recuperer le slider correspondant

  let sliderImg = document.querySelector("#banner .banner-img"); // recuperer l'image du slider

  sliderImg.src = "./assets/images/slideshow/" + sliderCourrant.image; // change la source de limage avec celle du slider courant

  let sliderP = document.querySelector("#banner p"); // recuperer le text du slider
  sliderP.innerHTML = sliderCourrant.tagLine; // change le text avec celui du slider courant
}

//function a executer lors d'un clic a gauche
function clickGauche() {
  console.log("gauche");

  let indice; // variable pur garder en memoir plus tard l'indice du point qui doit passer a blanc

  let dots = document.getElementsByClassName("dot"); // on recupere tous les elements html de class dot

  //on recupère un par un les elements du tableau dots
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]; // un point

    if (dot.classList.contains("dot_selected")) {
      // si le point est selectionné
      dot.classList.remove("dot_selected"); //on le desselectionne
      indice = i - 1; //on garde en memoir l'indice du point precedent
      break; //on arrete la boucle
    }
  }

  if (indice < 0) {
    // verifier si on est  inferieur a 0 et remet a l fin du slider
    indice = dots.length - 1;
  }

  dots[indice].classList.add("dot_selected"); // mettre le nouveau point blanc (selecionné)
  let sliderCourrant = slides[indice]; // recuperer le slider correspondant

  let sliderImg = document.querySelector("#banner .banner-img"); // recuperer l'image du slider

  sliderImg.src = "./assets/images/slideshow/" + sliderCourrant.image; // change la source de limage avec celle du slider courant

  let sliderP = document.querySelector("#banner p"); // recuperer le text du slider

  sliderP.innerHTML = sliderCourrant.tagLine; // change le text avec celui du slider courant
}
