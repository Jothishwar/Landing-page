const navSlide=()=>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.links');
	const navlinks = document.querySelector('.links a');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		navlinks.forEach((link,index)=>{
			if(link.style.animation){
				link.style.animation='';
			}else{
				link.style.animation=`navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`;
			}
		});

	});
};
navSlide();