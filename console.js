(function() {
	var textarea = document.getElementById('console');
	textarea.addEventListener('keypress', function(e) {
		console.log(e);
		if (e.ctrlKey && (e.keyCode == 10 || e.keyCode == 13)) {
			console.log("Running!");
			console.log(textarea.value);
			console.log(window.opener, window.opener.run);
			window.opener.run(textarea.value);
		}
	});
})();
