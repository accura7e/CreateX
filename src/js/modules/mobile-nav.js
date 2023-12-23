function mobileNav() {
	// Mobile nav button




	const navBtn = document.querySelectorAll('.mobile-nav-btn');
	const nav = document.querySelectorAll('.mobile-nav');
	const menuIcon = document.querySelectorAll('.nav-icon');

	navBtn.forEach(el => {
		el.onclick = () => {


			menuIcon.forEach(el => {
				el.classList.toggle('nav-icon--active');
			})

			nav.forEach(el => {
				el.classList.toggle('mobile-nav--open');
			})
			document.body.classList.toggle('no-scroll');
		}
	})
	

}

export default mobileNav;