// On load
const savedLang = localStorage.getItem('lang');
if (savedLang) {
  document.documentElement.setAttribute('lang', savedLang);
}

const toggleBtn = document.getElementById('toggleLang'); 

// On toggle
toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const currentLang = html.getAttribute('lang');
  const newLang = currentLang === 'en' ? 'ko' : 'en';

  html.setAttribute('lang', newLang);
  localStorage.setItem('lang', newLang);
});

