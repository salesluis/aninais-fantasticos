export default function initDropdownMenu() {
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]'); 

dropdownMenus.forEach(menu => {
  ['touchstart', 'click', 'couseover'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick)
  })
})

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('open');
}
