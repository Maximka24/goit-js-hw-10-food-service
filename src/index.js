import './sass/main.scss';
import itemCardTml from './partials/color-card.hbs';
import cardMenu from '../menu.json';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const refs = {
// 	switchBgrColor: document.querySelector('#theme-switch-toggle'),
// 	menuList: document.querySelector('.js-menu'),
// 	bodyColorTarget: document.querySelector('body')
// };

// populateClassBody();

// //------ Разметка HTML -----//

// const cardsMarkup = creatItemsMenuMarkup(cardMenu);
// refs.menuList.insertAdjacentHTML('beforeend', cardsMarkup);

// function creatItemsMenuMarkup(items) {
// 	return itemCardTml(items);
// };

// //---- Смена цвета на Body -----//

// refs.switchBgrColor.addEventListener('change', onChangeBodyBgColor);

// function onChangeBodyBgColor(evt) {
// 	evt.preventDefault();
	
// 	const checkClassListLight = refs.bodyColorTarget.classList.contains(Theme.LIGHT);
	
// 	if (checkClassListLight) {
// 		refs.bodyColorTarget.classList.remove(Theme.LIGHT);
// 		refs.bodyColorTarget.classList.add(Theme.DARK);
// 	}

// 	if (!checkClassListLight) {
// 		refs.bodyColorTarget.classList.add(Theme.LIGHT);
// 		refs.bodyColorTarget.classList.remove(Theme.DARK);
// 	}

// 	localStorage.setItem('bodyBgColor', refs.bodyColorTarget.classList.value);
// 	localStorage.setItem('checkedInput', refs.switchBgrColor.checked);	
// };

// function populateClassBody() {	
// 	const saveClassLocal = localStorage.getItem('bodyBgColor');
// 	const saveChecked = localStorage.getItem('checkedInput');	
	
// 	if (saveClassLocal && saveChecked) {
// 		refs.bodyColorTarget.classList.remove(Theme.LIGHT);
// 		refs.bodyColorTarget.classList.toggle(saveClassLocal);
// 		refs.switchBgrColor.checked = JSON.parse(saveChecked);

// 		return;
// 	}
// 	refs.bodyColorTarget.classList.add(Theme.LIGHT);
// 	refs.switchBgrColor.checked = false;	
// };