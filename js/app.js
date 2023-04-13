const langArr = {
 'home':{
    'en' : 'Home',
    'ru' :'Главный'
 },
  about:{
    en: 'About',
    ru: 'О нас'
  },
  'homeb':{
    'en' : 'Home',
    'ru' :'Главный'
 },
 
}





const en = document.querySelector('#en');
const ru = document.querySelector('#ru');
const enb = document.querySelector('#enb');
const rub = document.querySelector('#rub');
const allLang = ['en', 'ru'];


en.addEventListener('click', () =>{
    changeURLLanguage('en')
} );

ru.addEventListener('click', () =>{
    changeURLLanguage('ru')
} );

enb.addEventListener('click', () =>{
    changeURLLanguage('en')

} );

rub.addEventListener('click', () =>{
    changeURLLanguage('ru')
} );


function changeURLLanguage(lang) {
    if(window.location.hash !== ('#'+ lang)){
        location.href = window.location.pathname + '#' + lang;
        location.reload();
    }
   
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();





