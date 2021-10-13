let common_Header = document.querySelector(".headerBG-for-otherPages");
let common_TopBar = document.querySelector(".header__top-bar");
let window_Width = window.innerWidth; //get the window width
let headerWidth = common_Header.offsetWidth;
//console.log(window_Width);
common_TopBar.classList.add("sticky");
let lastScrollY1=0;
let lastScrollY2=0;

/* if (window_Width <= 1024) {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        FixTopBar();
    };

    function FixTopBar() {
        
        //console.log("px " + lastScrollY1);
        console.log("p1 "+lastScrollY1)
        console.log("p2 "+lastScrollY2)

        lastScrollY1=window.scrollY;
        

        if (lastScrollY1 > lastScrollY2) {
                common_TopBar.classList.remove("sticky");
                console.log("p1 "+lastScrollY1)
                console.log("p2 "+lastScrollY2)

            } else {
                common_TopBar.classList.add("sticky");
                //console.log("ok")
        }

        lastScrollY2=0;
    } */

    /* // Get the offset position of the navbar
    var sticky = common_TopBar.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function FixTopBar() {
        if (window.pageYOffset > sticky) {
            //common_TopBar.classList.add("sticky");
            common_TopBar.classList.remove("sticky");
            console.log(headerWidth);
        } else {
        }
    } */
//}

let scroll_position = 0;
let scroll_direction;

window.addEventListener('scroll', function(e){
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? lastScrollY1='up' : lastScrollY1='down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    //console.log(lastScrollY1);

    if ((lastScrollY1==="up") && (window.scrollY > 100)) {
        common_TopBar.classList.add("sticky");
        
    } else {
        //console.log("ok")
        common_TopBar.classList.remove("sticky");
}

});
