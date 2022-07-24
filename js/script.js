"use strict"
const header = $('.header');
const programList = $('.studying-programs__list');
const coverSmall = $('.cover_small');
const coverSide = $('.cover_side');
const sideBarPhoneButton = $('.side-bar__phone-button');

const subtitleButton = $('.subtitle__button');
const selectWindow = $('.select__window');

let currentScroll = 0;

document.addEventListener('scroll', colorHeader, {passive: true});
document.addEventListener('scroll', defineHeaderPosition, {passive: true});
programList.click(toggleProgramList);
programList.click(toggleIcon);
$('.button-menu').click(toggleHeaderMenu);
$('.button-courses').click(toggleCoursesMenu);
$('.burger-button').click(toggleSideBar);
$('.side-bar__close-button').click(hideMenu);
$('.side-bar__phone-button').click(toggleSideBarPhone);
$('.subtitle__button').click(toggleLicence);
$('.licence__close').click(toggleLicence);
coverSmall.click(hideMenu);
coverSide.click(hideMenu);
$('.front-page__select').click(toggleSelect);
$('.select__option').click(selectOption);

colorHeader();

$(document).ready(function(){
  $('.slider-image').slick({
  	lazyLoad: 'ondemand',
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    infinite: false,
    variableWidth: false,
    waitForAnimate: false
  });

  $('.slider-nav').slick({
    adaptiveHeight: false,
    arrows: false,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    asNavFor: '.slider-image',
    focusOnSelect: true,
    infinite: false
  });
});


function colorHeader() {
	if (header.hasClass('header__menu-opened')) {
		header.addClass('header_white');
		return;
	}
	if (window.pageYOffset != 0) {
		header.addClass('header_white');
		return;
	}

	header.removeClass('header_white');
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

function toggleHeaderMenu() {
	if ($('.header__courses').hasClass('header__courses_active')) {
		$('.header__courses').removeClass('header__courses_active');
		$('.button-courses').removeClass('button-courses_active');
		$('.header__menu').addClass('header__menu_active');
		$('.button-menu').addClass('button-menu_active');
		return;
	}

	$('.header__menu').toggleClass('header__menu_active');
	$('.button-menu').toggleClass('button-menu_active');
	toggleCover(coverSmall);
}

function toggleCoursesMenu() {
	if ($('.header__menu').hasClass('header__menu_active')) {
		$('.header__menu').removeClass('header__menu_active');
		$('.button-menu').removeClass('button-menu_active');
		$('.header__courses').addClass('header__courses_active');
		$('.button-courses').addClass('button-courses_active');
		return;
	}
	
	$('.header__courses').toggleClass('header__courses_active');
	$('.button-courses').toggleClass('button-courses_active');
	toggleCover(coverSmall);
}

function toggleSideBar() {
	hideMenu();
	$('.side-bar').toggleClass('side-bar_active');
	toggleCover(coverSide);
}

function hideMenu() {
	$('.header__menu').removeClass('header__menu_active');
	$('.side-bar').removeClass('side-bar_active');
	$('.header__courses').removeClass('header__courses_active');

	header.removeClass('header__menu-opened');
	$('body').removeClass('body_overflow-hidden');
	colorHeader();

	coverSmall.removeClass('cover_active');
	coverSide.removeClass('cover_active');
	$('.button-menu').removeClass('button-menu_active');
	$('.button-courses').removeClass('button-courses_active');
}

function toggleCover(cover) {
	cover.toggleClass('cover_active');
	header.toggleClass('header__menu-opened');
	$('body').toggleClass('body_overflow-hidden');
	colorHeader();
}

function toggleSideBarPhone() {
	let sideBarPhone = document.querySelector('.side-bar__phone');
	sideBarPhone.classList.toggle('side-bar__phone_opened');
}

function defineHeaderPosition() {
	if (window.pageYOffset - currentScroll > 200) {
		header.addClass('header_hidden');
		currentScroll = window.pageYOffset;
	}

	if (window.pageYOffset - currentScroll < -200) {
		header.removeClass('header_hidden');
		currentScroll = window.pageYOffset;
	}	
}

function toggleLicence() {
	$('.licence').toggleClass('licence_hidden');
	$('body').toggleClass('body_overflow-hidden');
}

function toggleSelect() {
	$('.front-page__select').toggleClass('front-page__select_opened');
}

function selectOption(event) {
	let target = event.target;
	$('.select__text').text(target.innerText);
	$('.select__option_selected').removeClass('select__option_selected');
	$(target).addClass('select__option_selected');
}
