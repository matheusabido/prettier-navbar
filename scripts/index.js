const header = document.querySelector('header')
document.querySelector('.hamburguer-wrapper').onclick = () => header.dataset.active = +!~~header.dataset.active