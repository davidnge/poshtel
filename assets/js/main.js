
const headerNav = document.getElementsByClassName("header-nav")[0];

document.addEventListener("click", function(){

	if (event.target.classList.contains("mobile-menu")){
		headerNav.classList.toggle("mobile-menu-opened");
	}
});