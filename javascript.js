//menu icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// Select all sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Run function when user scrolls
window.onscroll = () => {

  // Loop through each section to check scroll position
  sections.forEach(sec => {
    let top = window.scrollY;                  // Current scroll position
    let offset = sec.offsetTop - 100;          // Section top position with some margin
    let height = sec.offsetHeight;             // Section height
    let id = sec.getAttribute('id');           // Get section id (used to match nav link)

    // Check if screen is inside the section
    if (top >= offset && top < offset + height) {

      // Remove active class from all nav links
      navLinks.forEach(link => {
        link.classList.remove('active');

        // Add active class to the current matching nav link
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      //active section for animation on scroll
      sec.classList.add(show-animate);

    }
    //if want use animation that report on scroll use this
  else{
      sec.classList.remove(show-animate);
    
  }
  });

  //  Sticky Header Logic
  let header = document.querySelector('header'); 

  // Toggle (add/remove) sticky class when scroll is more than 100px
  header.classList.toggle('sticky', window.scrollY > 100);
 // remove toggle icon navbar icon when click
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
