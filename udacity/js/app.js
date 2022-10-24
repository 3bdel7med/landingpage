
const mybutton = document.getElementById('myBtn'); //define glopal variable my button
const sectionsElements = document.querySelectorAll('section');//define glopal variable sectionsElements
const navbarUl = document.getElementById('navbar__list');//define glopal variable navbarUl

const title = document.getElementById('landing-title'); // change title's text

let navList = ''; // edit nav list to lists from fuctions



/*
create  function called gernerateNavbar to get sections by id selecting helper
*/
function gernerateNavbar() {
  sectionsElements.forEach((section) => {

    navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;// add html code 
  });

  navbarUl.innerHTML = navList; // to add the tags
}
gernerateNavbar();

/*
create function called addActiveClass to active items
*/

function addActiveClass(section) {

  const id = section.getAttribute('id'); //to select items active by id

  
  document.querySelector(`#${id}`).classList.add('your-active-class');
}

/*
create function removeActiveClass help us to remove style active from unselect items
*/
function removeActiveClass(section) {
  const id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.remove('your-active-class');
}

/*
create function makeActiveSection to cleare the items active
*/
function makeActiveSection() {
  sectionsElements.forEach((section) => {
 let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}

document.addEventListener('scroll', makeActiveSection);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

/*
create function to go to the top oage called topFunction

*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari explrer
  document.documentElement.scrollTop = 0; // For all explorer Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);

let navbar = document.getElementById('navbar').querySelectorAll('li');


navbar.forEach((item) => {
  item.addEventListener('click', function (e) {
    navbar.forEach((item) => {

      item.classList.remove('navbarclick');
    });
    
    item.classList.add('navbarclick');
  });
});
