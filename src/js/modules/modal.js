export default function modal(){
    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnfechar = document.querySelector('[data-modal="fechar"]')
    const modal = document.querySelector("[data-modal='container']");
    if(btnAbrir && btnfechar && modal){
    function toggleModal(event){
      event.preventDefault();
      modal.classList.toggle('ativo')
    }
    function clickFora(event) {
      if(event.target === this){
        toggleModal(event) 
      }
    }
    
    btnAbrir.addEventListener('click', toggleModal)
    btnfechar.addEventListener('click', toggleModal)
    modal.addEventListener('click', clickFora)
  }
}