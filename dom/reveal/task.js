let isInViewport = function(element) { 
        let location = element.getBoundingClientRect();
        let height = document.documentElement.clientHeight;

        let bottom = location.bottom < height && location.bottom > 0;
        let top = location.top > 0 && location.top < height;
        console.log(location);
        return top || bottom;
        

}






function showVisible() {

        const revealElems = document.querySelectorAll('.reveal');

        for (let i = 0; i < revealElems.length; i++) {

                let revealElem = revealElems[i];

                if(isInViewport(revealElem)) {

                revealElem.classList.add('reveal_active');
               
                }
        }
}








showVisible();
window.addEventListener('scroll', function() {
        showVisible ();
      });