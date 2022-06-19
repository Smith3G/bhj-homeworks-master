const tabs = document.querySelectorAll('.tabs');
console.log(tabs);

for(let i = 0; i < tabs.length; i++) {
let menuTabs = tabs[i].querySelectorAll('.tab');
let contentTabs = tabs[i].querySelectorAll('.tab__content');


for(let i = 0; i < menuTabs.length; i++) {
        menuTabs[i].addEventListener('click', function() {

                for(let j = 0; j < menuTabs.length; j++) {
                        if(menuTabs[j].classList.contains('tab_active')) {
                                menuTabs[j].classList.remove('tab_active');
                                contentTabs[j].classList.remove('tab__content_active');
                        }
                }
                menuTabs[i].classList.add('tab_active');
                contentTabs[i].classList.add('tab__content_active');
        });
    }
}