

const hammenu = document.querySelector(".mediamenu")

const mewnar = document.querySelector('.navopta')

const cross = document.querySelector(".cross")




  hammenu.addEventListener('click', function () {
    mewnar.classList.toggle('active')

  

    hammenu.classList.toggle('active')
    
  })


  const sbtn = document.querySelector('.viewsearch');

  const searchbar = document.querySelector('.searchbar')

  const body = document.querySelector('body')


sbtn.addEventListener('click', function () {


  searchbar.classList.toggle('active')

  
    
  })


  





  



  







  var swiper = new Swiper(".box", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
      
    });



