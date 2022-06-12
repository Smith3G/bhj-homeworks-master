
const bread = document.getElementById("cookie");
let size = 200;
let step = 100;

bread.style.width = (size + 'px');

bread.addEventListener('click', resize);

function resize() {
        size += step;
        bread.style.width = (size + 'px');

        if(size == 300 || size == 200) step *= -1;
}

const count = document.getElementById("clicker__counter");
function countClick() {
        let click =+clicker__counter.textContent;
        click++;
        clicker__counter.textContent = click;
}
bread.addEventListener('click', countClick);