// Import our custom CSS
import '../scss/styles.scss';


import * as bootstrap from 'bootstrap';


const defaultLocale = 'en';
let locale;

let translations = {};

async function setLocale(newLocale) {
    if (newLocale === locale) return;
    const newTranslations =
        await fetchTranslationsFor(newLocale);

    locale = newLocale;
    translations = newTranslations;
    translatePage();
}

async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`/languages/${newLocale}.json`);
    return await response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    setLocale(defaultLocale);
    bindLocaleSwitcher(defaultLocale);
});

function translatePage() {
    document
      .querySelectorAll("[data-i18n-key]")
      .forEach(translateElement);
}

function bindLocaleSwitcher(initialValue) {
    const switcher =
      document.querySelector("[data-i18n-switcher]");
    
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      // Set the locale to the selected option[value]
      setLocale(e.target.value);
    };
}

  // Replace the inner text of the given HTML element
  // with the translation in the active locale,
  // corresponding to the element's data-i18n-key
function translateElement(element) {
    let key = element.getAttribute('data-i18n-key');
    let translation = translations[key];
    
    // let arrr = Object.entries(translations);

    // const translation = arrr.filter(([key, value]) =>  {
    //     return value
    // });

    // const translation = Object.fromEntries(filtered);
    element.innerText = translation;
}