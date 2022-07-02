const messages = document.querySelector('.chat-widget__messages');
const chatBage = document.querySelector('.chat-widget');

let answers = ['Вы не купили ни одного товара, для того чтобы так с нами разговаривать', 'Кто тут?', 'Где ваша совесть?' ,'К сожалению все операторы сейчас заняты.Не пишите нам больше', 'Добрый день!До свидания!', 'Где ваша совесть?' ,'Мы ничего не будем вам продавать!'];
const options = {hour:'numeric', minute: 'numeric', second: 'numeric'};

chatBage.addEventListener('click', function() { chatBage.classList.add("chat-widget_active");
}
);

function randomNumber(max = answers.length - 1) {
        let random = Math.floor(Math.random() * (max +1))
        console.log(random);
        return random;
        
    }

 
    function botMessage(){

        let time = new Date;
        let formatedTime = time.toLocaleString('ru', options);

        messages.innerHTML += `
        <div class = "message">
         <div class = "message__time">` + formatedTime +
         `</div>
        <div class = "message__text">` + answers[randomNumber()]
        + `</div>
        </div>`;
    }
    const input = document.getElementById("chat-widget__input");
   
    

    function sendMessage(){
        const form = document.getElementById("chat-widget__input");
       form.addEventListener('keydown', function(e) {

       
        if ((e.keyCode === 13) && (form.value != '')) {
       
        let time = new Date();
        let formatedTime = time.toLocaleString('ru', options);
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">` +
            formatedTime
            + `</div>
            <div class="message__text">` +
            form.value
            + `</div>
        </div>
        `;        
        form.value = '';
        botMessage();
        
    };
  }
 )
}
sendMessage();

  