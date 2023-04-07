const conts = document.querySelectorAll('.cont');
for (let g7 = 0; g7 < conts.length; g7++) {
    conts[g7].addEventListener('click', () => {
        conts[g7].classList.toggle('bacel-em');
    });
}



const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);


function trackScroll() {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        goTopBtn.classList.add(".go-top--show");
    } else {

        goTopBtn.classList.remove(".go-top--show");
    }
}

function goTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// let header = document.querySelector('.js-header');
// let headerH = document.querySelector('.js-header').clientHeight;

// document.onscroll = function () {
//     let scroll = window.scrollY;

//     if (scroll > headerH)
//         header.classList.add('fixed');
//     document.body.style.paddingTop = headerH + "px";
// }

const header = document.querySelector('.header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        document.querySelector('.go-top').classList.add('go-top-lav');
    } else {
        document.querySelector('.go-top').classList.remove('go-top-lav');
    }
console.log(window.scrollY,lastScroll)
    if(window.scrollY > 400 && window.scrollY > lastScroll ) {
        //scroll down
        header.classList.add('hide');
    }
    else if(window.scrollY < lastScroll){
        //scroll up
        header.classList.remove('hide');

    }
lastScroll = window.scrollY;
});


// burger-menu 
const burgerBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu-cont');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('opened');
    burgerMenu.classList.toggle('opened');
})

const burgerItems = document.querySelectorAll('.burger-item');
burgerItems.forEach((item) => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('opened');
        burgerBtn.classList.remove('opened');
    })
});

const langArr = {
    'man':{
       'en' : 'Home',
       'ru' :'Главный'
    },
    'manb':{
        'en' : 'Home',
        'ru' :'Главный'
     },
     girl:{
       en: 'About',
       ru: 'О нас'
     },
     girlb:{
        en: 'About',
       ru: 'О нас'
     },
    kids:{
        en: 'Services',
        ru: 'Сервис'
    },
    kidsb:{
        en: 'Services',
        ru: 'Сервис'
    },
    logout:{
        en: 'Contact',
        ru: 'Контакт'
    },
    logoutb:{
        en: 'Contact',
        ru: 'Контакт' 
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
   
const apranqner = document.querySelectorAll('.card');
const form = document.querySelector('.input-cont');
const searchInput = document.querySelector('.input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchText =  searchInput.value;
    apranqner.forEach((apranq) => {
        const gin = apranq.querySelector('.shor-name')
        if (gin.innerText.toLowerCase().includes(searchText.toLowerCase())) {
            apranq.style.display = 'block';
        } else {
            apranq.style.display = 'none';
        }
    });
});
