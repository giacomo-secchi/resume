// Import our custom CSS
import '../scss/styles.scss';


import * as bootstrap from 'bootstrap';


document.addEventListener('DOMContentLoaded', () => {

});


function bindLocaleSwitcher(initialValue) {
    const switcher =
      document.querySelector("[data-i18n-switcher]");
    
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      // Set the locale to the selected option[value]
      // setLocale(e.target.value);
    };
}
 