let menuContainer;

window.addEventListener('click', function () {
	menuContainer.innerHTML = '';
});

window.addEventListener('DOMContentLoaded', function () {
	menuContainer = document.querySelector('#search-menu-container');

	menuContainer.addEventListener('click', function (e) {
		e.stopPropagation();
	});

	let searchInput = document.querySelector('#search-input');
	let ref;
	searchInput.addEventListener('input', function (e) {
		const value = e.target.value;
		if (ref) {
			clearTimeout(ref);
		}
		ref = setTimeout(function () {
			axios
				.get('/users?search=' + value)
				.then(response => {
					menuContainer.innerHTML = response.data;
				})
				.catch(function (err) {
					console.log(err);
				});
		}, 2000);
	});
});
