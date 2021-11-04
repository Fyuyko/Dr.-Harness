"use strict"

document.addEventListener('DOMContentLoaded', () => {


   //Tabs

   const buttonsParent = document.querySelector('.tabheader__switches'),
         button = document.querySelectorAll('.tabheader__switch'),
         content = document.querySelectorAll('.tabcontent');


   function hideTabContent() {
      content.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show');
      });

      button.forEach(item => {
         item.classList.remove('tabheader__switch-active');
      });
   }

   function showTabContent(i = 0) {
      content[i].classList.add('show');
      content[i].classList.remove('hide');
      button[i].classList.add('tabheader__switch-active');
   }


   hideTabContent();
   showTabContent();

   buttonsParent.addEventListener('click', function(event) {
      const target = event.target;
      if(target && target.classList.contains('tabheader__switch')) {
         button.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });

   //Modal

   const modalTrigger = document.querySelectorAll('[data-modal]'),  
         modal = document.querySelector('.modal');                            

   modalTrigger.forEach(btn => {                                    
      btn.addEventListener('click', openModal);                      
   });

   function closeModal() {                                          
      modal.classList.add('hide');                                  
      modal.classList.remove('show');                               
      document.body.style.overflow = '';                            
   }

   function openModal() {                                           
      modal.classList.add('show');                                  
      modal.classList.remove('hide');                           
      document.body.style.overflow = 'hidden';                                
   }

   modal.addEventListener('click', (e) => {                 
      if (e.target.getAttribute('data-close') == '') {     
         closeModal();
      }
   });

   modal.addEventListener('click', (e) => {                 
      if (e.target === modal) {     
         closeModal();
      }
   });


   document.addEventListener('keydown', (e) => {                   
      if (e.code === "Escape" && modal.classList.contains('show')) { 
         closeModal();
      }
   });












   


});