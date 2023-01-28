const button = document.querySelector('.deliver');
const form = document.querySelector('#form');
const sl1 = document.querySelector('.slide-1')
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.btn-success')


button.addEventListener('click', () => {
  sl1.classList.toggle('popup-bg')
  form.classList.add('open');
  popup.classList.add('popup_open');

})
btnClose.addEventListener('click', () => {
    sl1.classList.remove('popup-bg')
    form.classList.remove('open');
    popup.classList.remove('popup_open');
  })
