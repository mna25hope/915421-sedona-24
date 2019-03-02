		var link = document.querySelector(".button-search-hotel");
		
		var popup = document.querySelector(".modal-search");
		var close = popup.querySelector(".button-search-hotel");
		
		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
		});
		
		close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		});
