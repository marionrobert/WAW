import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // console.log("hello from display-cart controller")
  }

  showCart() {
    const panierflottant = document.getElementById("panierflottant")
    const dark = document.getElementById("darken")
    panierflottant.classList.add("open")
    dark.classList.add("darkenmenuopen")
  }

  closeCart() {
    const panierflottant = document.getElementById("panierflottant")
    const connexioncartbutton = document.getElementById("connexioncartbuttons");
    const dark= document.getElementById("darken")
    panierflottant.classList.remove("open")
    dark.classList.remove("darkenmenuopen")
    connexioncartbutton.classList.remove("open")
  }

  categoriesdisplay() {
    const bandeaucat = document.getElementById("bandeau_categories");
    bandeaucat.classList.remove("hidden");
    bandeaucat.classList.add("enable_on_desktop");

    // Ajout de l'écouteur d'événements
    bandeaucat.addEventListener("mouseleave", function() {
      bandeaucat.classList.remove("enable_on_desktop");
      bandeaucat.classList.add("hidden");
    });
  }

  connexion () {
    const connexioncartbuttons = document.getElementById("connexioncartbuttons");
    connexioncartbuttons.classList.toggle("open");
  }
}
