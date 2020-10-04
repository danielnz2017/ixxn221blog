const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay  = document.getElementById('overlay')


openModalButtons.forEach(button => {


    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })



closeModalButtons.forEach(button => {


    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})



// ?????

function openModal(modal){



    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}



function closeModal(modal){



    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}








function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

 }






 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

 