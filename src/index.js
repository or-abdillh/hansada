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