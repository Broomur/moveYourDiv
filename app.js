/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/


/* ****************************************************************
**************************** VARIABLES ****************************
**************************************************************** */
const redDiv = document.querySelector(".red");
const modalDiv = document.querySelector(".modal");
const moveDiv = document.querySelector("#moveDiv");
const hideModal = document.querySelector("#hideModal");
let clickCounter = 0;

/* ****************************************************************
**************************** FUNCTIONS ****************************
**************************************************************** */
function showingModal() {
    modalDiv.style.display = "block";
};

function hidingModal() {
    modalDiv.style.display = "none";
};


/* ****************************************************************
************************* EVENT-HANDLERS **************************
**************************************************************** */
moveDiv.addEventListener("click", () => {
    switch(clickCounter) {
        case 0:
            redDiv.style.marginLeft = "250px";
            clickCounter = 1;
            hidingModal();
            break;
        case 1:
            redDiv.style.marginTop = "250px";
            clickCounter = 2;
            break;
        case 2:
            redDiv.style.marginLeft = "0px";
            clickCounter = 3;
            break;
        case 3:
            redDiv.style.marginTop = "0px";
            clickCounter = 0;
            showingModal();
            break;
    }
});

hideModal.addEventListener("click", hidingModal);