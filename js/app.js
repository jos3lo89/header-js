//  seleccionamos los dos elementos que serán clickables
const toggleButton = document.getElementById("menu");
const navWrapper = document.getElementById("main-link");
/* 
    cada ves que se haga click en el botón 
    agrega y quita las clases necesarias 
    para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
	toggleButton.classList.toggle("close");
	navWrapper.classList.toggle("show");
});
/* 
    Cuándo se haga click fuera del contenedor de enlaces 
    el menú debe esconderse.
*/
navWrapper.addEventListener("click", (e) => {
	if (e.target.id === "main-link") {
		navWrapper.classList.remove("show");
		toggleButton.classList.remove("close");
	}
});

//swiper
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true, //slides infinitos
	allowTouchMove: true, //mover con el maus o dedos en moviles
	effect: "slide", //efecto al deslizar
	autoplay: {
		delay: 5000, //auto-play cada 5 sec
		pauseOnMouseEnter: true, //pasa maus y pausa slides
		disableOnInteraction: false, //vuelva a lo mismo
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true, //click bolitas ir pagina
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});
