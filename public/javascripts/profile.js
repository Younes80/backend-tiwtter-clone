window.addEventListener('DOMContentLoaded', function () {
	const inputAvatar = document.querySelector('#input-avatar');
	const formContainer = document.querySelector('#form-container');

	formContainer.addEventListener('click', function () {
		inputAvatar.click();
	});
	inputAvatar.addEventListener('change', function () {
		formContainer.submit();
	});
});
