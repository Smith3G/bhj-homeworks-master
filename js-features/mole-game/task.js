const missCounter = document.getElementById('lost');
const deadCounter = document.getElementById('dead');

function getHole( index ) {
    return document.getElementById('hole' + index);
}
for (let i = 1; i < 9; i++) {
    elementHole = getHole( i );
    elementHole.addEventListener("click", function() {
      if ( elementHole.className.includes( 'hole_has-mole' ) ) {
        deadCounter.textContent = Number(deadCounter.textContent) + 1;
        if (Number(deadCounter.textContent) == 10) alert("Победа!");
      }
      else {
        missCounter.textContent = Number(missCounter.textContent) + 1;
        if (Number(missCounter.textContent) == 5) alert("Вы проиграли!");
      }
    });
}