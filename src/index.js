// This is script js for Home page

//Categorys event handler
const btnCategorys = document.querySelectorAll('.categorys span');

for (const btn of btnCategorys) {
   btn.addEventListener('click', e => {
      //Get classList
      const classEl = e.target.classList;
      //Remove class frim other element
      btnCategorys.forEach(el => {
         if (el.classList.contains('active')) el.classList.remove('active');
      });
      //Add class .active
      classEl.add('active');
   });
}

//Modal handler

const triggers = document.querySelectorAll('[data-role=trigger]')
const modalLayer = document.querySelector('.modal')
const modal = document.querySelector('.modal .modal-wrapper')
const close = document.querySelector('.modal .modal-wrapper .close')

//Trigger modal
triggers.forEach(btn => {

	btn.addEventListener('click', () => {
		modalLayer.classList.add('modal-layer-active')
		modal.classList.add('modal-active')
	})
})

//close modal
close.addEventListener('click', () => {
	setTimeout(() => {
		modalLayer.classList.remove('modal-layer-active')
		modal.classList.remove('modal-active')
	}, 300)
})
