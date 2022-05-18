"use strict"
const header = document.querySelector('.header');
const buttonCourses = document.querySelector('.button__courses');
const buttonMenu = document.querySelector('.button__menu');
const subtitleButton = document.querySelector('.subtitle__button');
const selectWindow = document.querySelector('.select__window');
const programList = document.querySelector('.studying-programs__list');


document.addEventListener('scroll', colorHeader);
programList.addEventListener('pointerdown', toggleProgramList);

function colorHeader() {
	if (window.pageYOffset == 0) {
		header.classList.remove('header_scrolled');
		return;
	}

	header.classList.add('header_scrolled');
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
