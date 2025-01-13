//Mobile Menu script 

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


//Sticky Header Script 
const header = document.querySelector('.header');


window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

function handleScroll() {
    if (window.scrollY > 120) { 
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}





//This Script is handling the filtering effect 
let filterButton = document.querySelector('.button-links');
let filterImages = document.querySelectorAll('.gallery-img');



window.addEventListener('load', ()=> {
    filterButton.addEventListener('click', (selectedItem) =>{
        if(selectedItem.target.classList.contains('button-link')){
            document.querySelector('.button-active').classList.remove('button-active');
            selectedItem.target.classList.add('button-active');

            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image) =>{
                let filterImages = image.getAttribute('data-name');

                if((filterImages == filterName) || filterName == 'all') {
                    image.style.display='block'
                }else {
                     image.style.display='none'
                }
            })
        }
    })
});




//back2Top  (SCRIPT FOR THE ROCKET )
const back2Top = document.getElementById("back2top-btn");

if (back2Top) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 700) {
      back2Top.classList.add("show");
    } else {
      back2Top.classList.remove("show");
    }
  };

  back2Top.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
} 




//Reveal item on Scroll 
// initialization  for card title
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".card-title h2", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".card-title p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal() .reveal(".box h1", {
  ...scrollRevealOption, 
  delay: 1500,
});
ScrollReveal() .reveal(".about", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal() .reveal(".s-links li", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal() .reveal(".q-links li", {
  ...scrollRevealOption,
  delay: 2000,
});


// initialization for   the filter button
const scrollRevealOptionB = {
  distance: "50px",
  origin: "right",
  duration: 1500,
};

ScrollReveal().reveal(".button-links", {
  ...scrollRevealOptionB,
  delay: 1500,
});


//intialization for the entire gallery
const scrollRevealOptionC = {
  distance: "5px",
  origin: "left",
  duration: 2000,
};

ScrollReveal().reveal(".gallery-img", {
  ...scrollRevealOptionC,
  delay: 2000,
});







