const msg = document.querySelectorAll('span');
let i = 0; 
let intervalId;
let speed;

function rotate () {
        clearInterval(intervalId);
        msg[i].classList.toggle('rotator__case_active');
        i++;
        if (i === msg.length) {
                i = 0;
        }
        msg[i].classList.toggle('rotator__case_active');
        msg[i].style.color = msg[i].dataset.color;
        speed = msg[i].dataset.speed;
        intervalId = setInterval(rotate, speed);
}

intervalId = setInterval(rotate, speed);





