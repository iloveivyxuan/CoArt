const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');
const modalContinueButton = document.querySelector('.btn.continue');

modalCloseButton.addEventListener('click', () => {
	toggleModal();
});

const toggleModal = () => {
	if (getComputedStyle(modal).display == 'none') {
		modal.style.display = 'flex';
		modal.classList.add('modal-show');
	} else {
		modal.classList.add('modal-hide');
		setTimeout(()=> {
			modal.style.display = 'none';
			modal.classList.remove('modal-show', 'modal-hide');
		}, 200);
	}
};

export { modal, toggleModal, modalContinueButton };
