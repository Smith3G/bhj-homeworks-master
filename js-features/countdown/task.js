
const timerElement = document.getElementById("timer");

// 





function countDown() {
        let timer =+timerElement.textContent;
        timer--;
        timerElement.textContent = timer;
        if (timer < 0) alert('Вы победили в конкурсе!');
        clearInterval();
}
setInterval(countDown, 1000);




function timeCounts() {
                let now = new Date();
                gap = date - now;
        
                if (gap < 0) {
                        alert('Вы победили в конкурсе!')
                }
        
        
        let hours = Math.floor(gap / 1000 / 60 /60) % 24;
        let minutes = Math.floor(gap / 1000 / 60) % 60;
        let secs = Math.floor(gap / 1000) % 60;
        }