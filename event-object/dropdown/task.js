let dropdownElements  = document.querySelectorAll('.dropdown__list');
console.log(dropdownElements);
let dropdownValue = document.querySelectorAll('.dropdown__value');
console.log(dropdownValue);


for(let i = 0; i < dropdownValue.length; i++) {
        dropdownValue[i].addEventListener('click', function() {

                if(dropdownElements[i].classList.contains('dropdown__list_active')) {
                        dropdownElements[i].classList.remove('dropdown__list_active');
                        
                } else {

                   dropdownElements[i].classList.add('dropdown__list_active');
                }
        }
    );
dropdownElements[i].addEventListener('click', function(evt) {

        evt.preventDefault();
        dropdownValue[i].innerHTML = evt.target.innerText;
        dropdownElements[i].classList.remove('dropdown__list_active');
      }
   );

 }