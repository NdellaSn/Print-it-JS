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


function manageDots() {
//on recover all the html elements of class dot

    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.addEventListener("click", function () {

            document.querySelector(".dot.dot_selected").classList.remove("dot_selected");
            dot.classList.add("dot_selected");

            const currantSlider = slides[i]; // will retrieve the corresponding sliders
            const sliderImg = document.querySelector("#banner .banner-img"); // will recover the image of the slider
            sliderImg.src = "./assets/images/slideshow/" + currantSlider.image; //change the image source with current slider cells
            const sliderP = document.querySelector("#banner p"); // recover the text of the slider
            sliderP.innerHTML = currantSlider.tagLine; //  change the text with the current slider

        });

    }
}


function manageArrows() {
//on retrieve all elements with the class arrow
    const arrows = document.getElementsByClassName("arrow");
    //on recovering one of the elements of the tableau
    for (let i = 0; i < arrows.length; i++) {
        const arrow = arrows[i];
        //add a clique event to the element
        arrow.addEventListener("click", function () {
            triggerClickArrow(arrow);
        });
    }
}


//function to executer with a click on an arrow
function triggerClickArrow(arrow) {
    const dots = document.getElementsByClassName("dot");

    const left = arrow.classList.contains("arrow_right") ? false : true;
    //on recupere la liste des classes du arrow  sur lequel on a cliqué
    /// et on vérifie s'il contient arrow_right



    let indice; // variable pur garder en memoir plus tard l'indice du point qui doit passer a blanc


    //on recupère un par un les elements du tableau dots
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]; // un point

        if (dot.classList.contains("dot_selected")) {
            // si le point est selectionné
            dot.classList.remove("dot_selected"); //on le desselectionne
            indice = left ? i - 1 : i + 1; //on garde en memoir l'indice du point precedent ou suivant
            break; //on arrete la boucle
        }
    }

    if (indice < 0 && left) {
        // verifier si on est  inferieur a 0 et remet a l fin du slider
        indice = dots.length - 1;
    }

    if (indice >= dots.length && !left) {
        // verifier si on est  inferieur a 0 et remet a l fin du slider
        indice = 0;
    }

    dots[indice].classList.add("dot_selected"); // mettre le nouveau point blanc (selecionné)

    const currantSlider = slides[indice]; // recuperer le slider correspondant

    const sliderImg = document.querySelector("#banner .banner-img"); // recuperer l'image du slider

    sliderImg.src = "./assets/images/slideshow/" + currantSlider.image; // change la source de limage avec celle du slider courant

    const sliderP = document.querySelector("#banner p"); // recuperer le text du slider

    sliderP.innerHTML = currantSlider.tagLine; // change le text avec celui du slider courant

}


manageArrows();
manageDots();
