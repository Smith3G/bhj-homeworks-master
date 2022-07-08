let xhr = new XMLHttpRequest();

const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');


xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.send();
xhr.onreadystatechange = function() {

        answers.innerHTML = "";

        if(xhr.readyState !== 4) {
                return;
        }
        if(xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
        } else {
                const pollJSON = JSON.parse(xhr.responseText);
                const answersJSON = pollJSON.data.answers;
                title.innerText = pollJSON.data.title;
        for (let key in answersJSON) {
            answers.innerHTML += `
            <button class="poll__answer" onclick="alert('Спасибо, ваш голос принят!');">
              ${answersJSON[key]}
            </button>            
            `
        }

}
}
