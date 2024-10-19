const openModal = document.querySelectorAll('.open-modal');
const modal = document.getElementById('myDialog');

openModal.forEach( button => {
    button.addEventListener('click', () => {
        modal.showModal();
    });
});