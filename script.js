

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function()
{
	var banner = document.getElementsByClassName('banner')[0];
	var gradient = document.getElementsByClassName('gradient')[0];

	var scrollTop = window.pageYOffset || window.scrollTop;



	gradient.style.top = -(scrollTop / banner.height) * 120 + 'px';
	//$(".gradient").css({left:scrollTop+'px'});

	console.log(scrollTop);
	//console.log(gradient.style.top);
	//console.log(banner.height)

  //square1.style.left = scrollPercent*window.innerWidth + 'px';
  //square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});
