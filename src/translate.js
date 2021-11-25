import en from './lang/en';
import ru from './lang/ru';

let language = null;
let dictionary = {};

export function i18n(lang) {
	language = lang;
	dictionary['en'] = en;
	dictionary['ru'] = ru;
}

export function _t_(string) {
	if (dictionary[language]) {
		return dictionary[language][string] || string;
	}
	return string;
}
