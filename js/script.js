"use strict"
const header = document.querySelector('.header');
const buttonCourses = document.querySelector('.button__courses');
const buttonMenu = document.querySelector('.button__menu');
const subtitleButton = document.querySelector('.subtitle__button');
const selectWindow = document.querySelector('.select__window');
const programList = document.querySelector('.studying-programs__list');


document.addEventListener('scroll', colorHeader);
programList.addEventListener('pointerdown', toggleProgramList);
programList.addEventListener('pointerdown', toggleIcon);

colorHeader();

$(document).ready(function(){
  $('.image-slider').slick({
    dots: false,
    slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
    draggable: true,
    infinite: false,
    swipe: true,
    swipeToSlide: true,
    // asNavFor: 'nav-slider'
  });

  $('.nav-slider').slick({
    dots: false,
    draggable: true,
    infinite: false,
    swipe: true,
    swipeToSlide: true,
    slidesToShow: 7,
  	slidesToScroll: 1,
 	asNavFor: '.image-slider',
 	// variableWidth: true,
 	focusOnSelect: true
  });
});


function colorHeader() {
	if (window.pageYOffset == 0) {
		header.classList.remove('header_scrolled');
		return;
	}

	header.classList.add('header_scrolled');
}

function toggleIcon(event) {
	let target = event.target.closest('.program__heading');
	if (! target) return;

	let span = target.querySelector('span');
	if (span.innerHTML == '+') {
		span.innerHTML = "\u2212";
	} else {
		span.innerHTML = '+';
	}
}

function toggleProgramList(event) {
	let target = event.target.closest('.program__heading');
	if (! target) return;

	let wrap = target.parentElement.querySelector('.program-wrap');

	if (wrap.style.height != '') {
		wrap.style.height = '';
		return;
	}

	let list = target.parentElement.querySelector('.program__list');
	wrap.style.height = list.offsetHeight + 'px';
}
