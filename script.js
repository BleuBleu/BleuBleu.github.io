// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function()
{
	var banner = document.getElementsByClassName('banner')[0];
	var gradient = document.getElementsByClassName('gradient')[0];
	var scrollTop = window.pageYOffset || window.scrollTop;

	gradient.style.top = -(Math.max(0, scrollTop - banner.height / 2) / (banner.height / 2)) * 120 + 'px';
});
