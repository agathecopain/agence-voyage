let menuBurger = document.getElementById(`menu`);
let liste = document.getElementById(`listeMenu`);
menuBurger.addEventListener("mouseenter", () => {
  liste.style.display = "block";
});
menuBurger.addEventListener("mouseleave", () => {
  liste.style.display = "none";
});

//Affichage des voyages sur la page destinations
// Ciblage du container des voyages/trips
let tripContainer = document.getElementById(`trip-container`);

// Limiter l'affichage

if (tripContainer) {
  // Boucle pour injecter les destinations dans le container
  destinations.forEach((destination) => {
    const card = document.createElement(`div`);
    card.classList.add(`card`);
    card.innerHTML = `
  <a href="./product.html?${destination.titre}"/>
  <img src="${destination.img}" alt="${destination.alt}"/>
  <p>${destination.description}</p>
  `;
    tripContainer.appendChild(card);
  });
}

// Affichage des articles de blog
//Ciblage du container d'artciles
let blogContainer = document.getElementById(`blog-container`);

if (blogContainer) {
  //Limiter l'affichage à 4
  let limitArticle = articles.slice(0, 4);

  //Boucle pour injecter les articles dans le container
  limitArticle.forEach((article) => {
    const blogArticle = document.createElement(`artcile`);
    blogArticle.classList.add(`blog-item`);
    blogArticle.innerHTML = `
  <img class="blog-image" alt="${article.alt}" src="${article.img}" />
  <div class="blog-text">
  <h3>${article.titre}</h3>
  <p>${article.description}</p>
  <p>${article.nom}</p>
  </div>
  `;
    blogContainer.appendChild(blogArticle);
  });
}
//Affichage des destinations été de mai à août
//Ciblage du container
let focusContainer = document.getElementById(`top-destination`);

//Déclaration des dates
const aujourdHui = new Date();
const mois = aujourdHui.getMonth();
const annee = aujourdHui.getFullYear();
const jour = aujourdHui.getDate();

//Boucle l'offre été : injecter les destinations été dans les destinations du moment
focusDestinations.forEach((destination) => {
  const topItem = document.createElement(`figure`);
  topItem.innerHTML = `
  <a href="./product.html">
  <img src="${destination.img}" alt="${destination.alt}" />
  <p>${destination.description}</p>
  `;
  if (mois >= 3 && mois <= 7 && destination.saison === "été") {
    //  topItem.style.display = "none";
    focusContainer.appendChild(topItem);
  }
});

//Affichage des destination automne en promo
//Ciblage du container
let promoContainer = document.getElementById(`promo-destination`);
let promotion = document.getElementById(`promotion`);
const promo = document.createElement(`marquee`);
promo.textContent =
  "Prévoyez votre prochain voyage grâce aux promotions du mois d'avril";
promotion.appendChild(promo);

//Boucle promo : injecter les destinations en promo dans les promotions du moment
focusDestinations.forEach((destination) => {
  const promoItem = document.createElement(`figure`);
  promoItem.innerHTML = `
  <a href="./product.html">
  <img src="${destination.img}" alt="${destination.alt}" />
  <p>${destination.description}</p>
  `;
  if (destination.promotion === "") {
    promoItem.style.display = "none";
  }
  promoContainer.appendChild(promoItem);
});
