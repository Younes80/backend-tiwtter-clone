window.addEventListener('DOMContentLoaded', function () {
	bindTweet();
});

function bindTweet() {
	var elements = document.querySelectorAll('.fa-trash-alt');
	var tweetContainer = document.querySelector('#tweet-list-container');
	elements.forEach(function (e) {
		e.addEventListener('click', function ($event) {
			var tweetId = $event.target.getAttribute('tweetid');
			axios
				.delete('/tweets/' + tweetId)
				.then(function (response) {
					tweetContainer.innerHTML = response.data;
					bindTweet();
				})
				.catch(function (e) {
					console.log(e);
				});
		});
	});
}
