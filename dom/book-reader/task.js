const elementsSize = document.querySelectorAll('.font-size');
const book = document.querySelector('#book');
const controls = document.querySelectorAll('.book__control');






        for(let elem of controls) {
                for (let control of elem.children) {
               control.addEventListener('click', fontColorChange);
               control.addEventListener('click', bgChange);
                }
        }

               function bgChange(event) {
                       event.preventDefault();
                const bg = event.target.getAttribute('data-bg-color');
                       if(bg !== null) {
                        document.body.style.background = bg;
                
                       };
                       
               
        }
             function fontColorChange(event) {
                event.preventDefault();
                const font = event.target.getAttribute('data-text-color');
                if(font !== null) {
                        document.body.style.color = font;
                }
                console.log(event.target);
             }
       
          

        


for (let i = 0;i < elementsSize.length; i++) {

elementsSize[i].addEventListener('click',
function(event) {

if (book.classList.contains('book_fs-small')) {
    book.classList.toggle('book_fs-small');
}

else if (book.classList.contains('book_fs-big')) {
        book.classList.toggle('book_fs-big');   
}

if (event.target.hasAttribute('data-size')) {
        book.classList.add('book_fs-' + event.target.dataset.size);
}


if(!event.target.classList.contains('font-size_active')) {

        for (let j = 0; j < elementsSize.length; j++) {

                if (elementsSize[j].classList.contains('font-size_active')) {
                    elementsSize[j].classList.toggle('font-size_active');
                }
        }
   event.target.classList.add('font-size_active');
}

  



       event.preventDefault();
   }
 );
}
