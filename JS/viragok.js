window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("filter").addEventListener("keyup", searchproduct, false);
}

function searchproduct() {
  const input = $("filter").value.toUpperCase();
  const cardContainer = $("egész");
  const cards = cardContainer.getElementsByClassName("col-6");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(" .card .card-body h5.card-title");
    
    
    
    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].classList.replace("d-none","d-flex");
      console.log(cards[i].className);
    } else {
      cards[i].classList.replace("d-flex","d-none");
      console.log(cards[i].className);
    }
  }
}
