/* =========================================================
   MOBILE NAVIGATION SCRIPT

   This JavaScript opens and closes the navigation menu
   when a visitor clicks the hamburger (☰) button on
   smaller screens.
========================================================= */


/* Find the HTML element with class="menu-button".
   In index.html this is the hamburger button:

   <button class="menu-button">☰</button>
*/
const btn = document.querySelector(".menu-button");


/* Find the HTML navigation element with class="main-nav".

   JavaScript will add/remove the "open" class from this
   element when the hamburger button is clicked.
*/
const nav = document.querySelector(".main-nav");


/* Listen for a click on the hamburger button. */
btn.addEventListener("click", () => {

    /* toggle() works like an on/off switch.

       If "open" is NOT present:
           it adds class="open"

       If "open" IS already present:
           it removes the class.

       CSS contains this rule:

           .main-nav.open {
               display: flex;
           }

       Therefore:
           First click  -> navigation appears
           Second click -> navigation disappears
    */
    nav.classList.toggle("open");
});
