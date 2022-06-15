
let subMenu = document.querySelectorAll('.menu_sub') // находим все элементы класса .menu_sub
console.log(subMenu);
for(let i = 0; i < subMenu.length; i++) { 
   let subMenuItem = subMenu[i].previousElementSibling;// перебераем  дочерние узелы предшествующий указанному узлу (сам не до конца понял что написал подсмотрел на https://basicweb.ru)
    
    subMenuItem.addEventListener("click", function(evt) {
            evt.preventDefault();// отключаем действие по умолчанию
            if(subMenu[i].classList.contains("menu_active")) {
                subMenu[i].classList.remove("menu_active");
                

            } else {
                subMenu[i].classList.add("menu_active");
                console.log(subMenuItem);
            }
    });

    
}

