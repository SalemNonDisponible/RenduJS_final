function afficherTitre(data) {
    //Affichage pour la présentation de la boutique
    let div = document.createElement("div");
    div.setAttribute("id", "presentation");

    let h1 = document.createElement("h1");
    h1.textContent = data.nomEntreprise;

    let p = document.createElement("p");
    p.textContent = data.slogan;

    let button = document.createElement("button");
    button.setAttribute("id", "btnDevis");
    button.textContent = data.bouton;

    //Placer les éléments créés
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button);
    header.appendChild(div);
}

function afficherProduits (data) {
    //Récupération du tableau d'objet des produits
    const produits = data.produits;

    //Boucle pour afficher chaque produit dans une carte
    produits.forEach(element => {
        console.log(element);
        
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let img = document.createElement("img");
        // img.src = element[image-url];
        img.setAttribute("src", `${element["image-url"]}`)

        let h3 = document.createElement("h3");
        h3.textContent = `${element.titre}`;

        let p = document.createElement("p");
        p.textContent = `${element.presentation}`;

        //Placer les éléments créés
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        sctProduits.appendChild(div);

    });
    
}

function afficherCommentaire(data) {
    //Récupération du tableau d'objet des clients
    const clients = data.clients;

    //Boucle pour afficher chaque commentaire des clients dans un bloc
    clients.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("class", "comments");

        let h4 = document.createElement("h4");
        h4.textContent = `De ${element.nom}`;

        let h5 = document.createElement("h5");
        h5.textContent = `Type de prestation : ${element.typePrestation}`;

        let p = document.createElement("p");
        p.textContent = `"${element.commentaire}"`;

        let h6 = document.createElement("h6");
        h6.textContent = `Note : ${element.note} étoiles`;

        //Placer les éléments créés
        div.appendChild(h4);
        div.appendChild(h5);
        div.appendChild(p);
        div.appendChild(h6);
        sctCommentaires.appendChild(div);
    });
}

//Liaison des éléments HTML au JavaScript
const header = document.getElementById("header");
const sctProduits = document.getElementById("produits");
const sctCommentaires = document.getElementById("commentaires");

fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json")
.then(response => response.json())
.then(data => {
    console.log(data);

    afficherTitre(data);
    afficherProduits(data);
    afficherCommentaire(data);
})