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
    'home':{
       'en' : 'Home',
       'ru' :'Главный'
    },
    'homeb':{
        'en' : 'Home',
        'ru' :'Главный'
     },
     about:{
       en: 'About',
       ru: 'О нас'
     },
     aboutb:{
        en: 'About',
       ru: 'О нас'
     },
    services:{
        en: 'Services',
        ru: 'Сервис'
    },
    servicesb:{
        en: 'Services',
        ru: 'Сервис'
    },
    contact:{
        en: 'Contact',
        ru: 'Контакт'
    },
    contactb:{
        en: 'Contact',
        ru: 'Контакт' 
    },
    text1:{
        en: 'Original REzerve Armenian SHOP',
        ru: 'Оригинальный REzerve Армянский магазин'
    },
    text2:{
        en: 'Armenian production by Erik Stepanyan and Rom Asatryan from Hrazdan',
        ru: 'Армянская продукция от Ерика Степаняна и Рома Асатряна с Г.Раздана '
    },
    text3:{
        en: 'Get the clothes you want!',
        ru: 'Приобретите ту одежду, которое вы хотите!'
    },
    text4:{
        en: 'Look over some of our custom orders',
        ru: 'Ознакомьтесь с некоторыми нашими индивидуальными заказами'
    },
    text5:{
        en: 'Looking for answers for some questions?',
        ru: 'Ищете ответы на некоторые вопросы?'
    },
    text6:{
        en: 'Check our FAQs',
        ru: 'Проверьте наши часто задаваемые вопросы'
    },
    text7:{
        en: 'Can I return my product?',
        ru: 'Могу ли я вернуть свой товар?'
    },
    text8:{
        en: 'We want to ensure that our clients love our products, but if you need to return something, we will be happy to help. Simply send us an email and we will help you through the process.',
        ru: 'Мы хотим, чтобы наши клиенты любили нашу продукцию, но если вам нужно что-то вернуть, мы будем рады помочь. Просто отправьте нам электронное письмо, и мы поможем вам в этом процессе.'
    },
    text9:{
        en: 'Are discounts available?',
        ru: 'Доступны ли скидки?'
    },
    text10:{
        en: 'Yes. You can stay up to date on special deals and promotions by joining the Thabisa e-mail list. We also offer a 1.5% discount on bank wire transactions.',
        ru: 'Да. Вы можете быть в курсе специальных предложений и рекламных акций, подписавшись на список рассылки REzerve. Мы также предлагаем скидку 1,5% на транзакции банковским переводом.'
    },
    text11:{
        en: 'How is my order packaged?',
        ru: 'Как упаковывается мой заказ?'
    },
    text12:{
        en: 'For standard orders within the U.S., we ship using secure, non-descript packaging material. Within is Thabisas elegantly branded gift box, which is ideal for gifting or personal storage.',
        ru: 'Для стандартных заказов в пределах Армении мы отправляем с использованием безопасного, неописуемого упаковочного материала. Внутри находится элегантная подарочная коробка REzerve, которая идеально подходит для подарка или личного хранения.'
    },
    text13:{
        en: 'Take advantage and you wont regret it',
        ru: 'Воспользуйтесь и вы не пожалеете'
    },
    text14:{
        en: 'Join us to save 10% OFF',
        ru: 'Присоединяйтесь к нам, чтобы сэкономить 10% скидки'
    },
    text15:{
        en: 'Follow our Instagram page and you will get 10% discount.',
        ru: 'Подпишитесь на нашу страницу в Instagram и получите скидку 10%.  '
    },
    text16:{
        en: 'Drop us a call',
        ru: ' Позвоните нам'
    },
    text17:{
        en: 'Give us a visit',
        ru: 'Посетите нас'
    },
    text18:{
        en: 'Make an order',
        ru: 'Сделать заказ'
    },
    text19:{
        en: 'Go To Shop',
        ru: 'В магазин'
    },
    text20:{
        en: 'Go To Shop',
        ru: 'В магазин'
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

