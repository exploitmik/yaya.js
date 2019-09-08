function YayaInit(){
	const yayaElements = document.querySelectorAll('[data-yaya]');
	const ob = new IntersectionObserver( (entries) => {
		entries.forEach( item => {
			const { target } = item;
			if ( item.isIntersecting ){
				target.classList.add(target.dataset.yaya);
				target.style.animationDuration = (target.dataset.yayaDuration || 1)+'s';
				target.style.animationDelay = (target.dataset.yayaDelay || 0)+'s';
				ob.unobserve(target);
			}
		});
	});
	yayaElements.forEach( element => ob.observe(element) );
}