window.addEventListener('scroll', function()
{
	var banner = document.getElementsByClassName('banner')[0];
	var gradient = document.getElementsByClassName('gradient')[0];
	var scrollTop = window.pageYOffset || window.scrollTop;

	gradient.style.top = Math.max(0, 164 + scrollTop - banner.height) * -0.75 + 'px';
});
