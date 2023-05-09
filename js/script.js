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

const header = document.querySelector('.header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        document.querySelector('.go-top').classList.add('go-top-lav');
    } else {
        document.querySelector('.go-top').classList.remove('go-top-lav');
    }
    console.log(window.scrollY, lastScroll)
    if (window.scrollY > 400 && window.scrollY > lastScroll) {
        //scroll down
        header.classList.add('hide');
    }
    else if (window.scrollY < lastScroll) {
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
    'home': {
        'en': 'Գլխավոր',
        'ru': 'Главный'
    },
    'homeb': {
        'en': 'Գլխավոր',
        'ru': 'Главный'
    },
    about: {
        en: 'Մեր մասին',
        ru: 'О нас'
    },
    aboutb: {
        en: 'Մեր մասին',
        ru: 'О нас'
    },
    services: {
        en: 'Ծառայություն',
        ru: 'Сервис'
    },
    servicesb: {
        en: 'Ծառայություն',
        ru: 'Сервис'
    },
    contact: {
        en: 'Կապ',
        ru: 'Контакт'
    },
    contactb: {
        en: 'Կապ',
        ru: 'Контакт'
    },
    text1: {
        en: 'Հայկական օրիգինալ REzerve խանութ',
        ru: 'Оригинальный REzerve Армянский магазин'
    },
    text2: {
        en: 'Էրիկ Ստեփանյանի և Ռոմ Ասատրյանի REzerve խանութը',
        ru: 'Армянская продукция от Ерика Степаняна и Рома Асатряна'
    },
    text3: {
        en: 'Գնեք այն հագուստը, որը ցանկանում եք!',
        ru: 'Приобретите ту одежду, которое вы хотите!'
    },
    text4: {
        en: 'Տեսեք մեր անհատական պատվերներից մի քանիսը',
        ru: 'Ознакомьтесь с некоторыми нашими индивидуальными заказами'
    },
    text5: {
        en: 'Փնտրու՞մ եք որոշ հարցերի պատասխաններ',
        ru: 'Ищете ответы на некоторые вопросы?'
    },
    text6: {
        en: 'Ծանոթացեք մեր Հաճախ տրվող հարցերին',
        ru: 'Проверьте наши часто задаваемые вопросы'
    },
    text7: {
        en: 'Կարող եմ վերադարձնել իմ ապրանքը:',
        ru: 'Могу ли я вернуть свой товар?'
    },
    text8: {
        en: 'Մենք ցանկանում ենք վստահ լինել, որ մեր հաճախորդները կվայելեն մեր արտադրանքը, բայց եթե Ձեզ անհրաժեշտ է ինչ-որ բան վերադարձնել, մենք ուրախ կլինենք օգնել: Պարզապես ուղարկեք մեզ էլ-նամակ, և մենք կօգնենք ձեզ անցնել այս գործընթացը:',
        ru: 'Мы хотим, чтобы наши клиенты любили нашу продукцию, но если вам нужно что-то вернуть, мы будем рады помочь. Просто отправьте нам электронное письмо, и мы поможем вам в этом процессе.'
    },
    text9: {
        en: 'Զեղչեր կա՞ն',
        ru: 'Доступны ли скидки?'
    },
    text10: {
        en: 'Այո Դուք կարող եք տեղեկացված լինել հատուկ առաջարկների և ակցիաների մասին ՝ միանալով REzerve-ի էլ.փոստի փոստային ցուցակին: Առաջարկում ենք նաև 1.5% զեղչ բանկային փոխանցումների համար:',
        ru: 'Да. Вы можете быть в курсе специальных предложений и рекламных акций, подписавшись на список рассылки REzerve. Мы также предлагаем скидку 1,5% на транзакции банковским переводом.'
    },
    text11: {
        en: 'Ինչպես է փաթեթավորվում իմ պատվերը',
        ru: 'Как упаковывается мой заказ?'
    },
    text12: {
        en: 'Հայաստանի ներսում ստանդարտ պատվերների համար մենք դրանք առաքում ենք հուսալի փաթեթավորման նյութով, որը նկարագրելի չէ: Ներսում կա նրբագեղ, ֆիրմային REzerve նվերների տուփ, որը կատարյալ է նվերների կամ անձնական պահեստավորման համար',
        ru: 'Для стандартных заказов в пределах Армении мы отправляем с использованием безопасного, неописуемого упаковочного материала. Внутри находится элегантная подарочная коробка REzerve, которая идеально подходит для подарка или личного хранения.'
    },
    text13: {
        en: 'Օգտվեք առավելությունից և չեք զղջա դրա համար',
        ru: 'Воспользуйтесь и вы не пожалеете'
    },
    text14: {
        en: 'Միացեք մեզ խնայելով 10% զեղջ',
        ru: 'Присоединяйтесь к нам, чтобы сэкономить 10% скидки'
    },
    text15: {
        en: 'Բաժանորդագրվեք մեր Instagram-ի էջին և կստանաք 10% զեղչ',
        ru: 'Подпишитесь на нашу страницу в Instagram и получите скидку 10%.  '
    },
    text16: {
        en: 'Զանգահարեք մեզ',
        ru: ' Позвоните нам'
    },
    text17: {
        en: 'Այցելեք մեզ',
        ru: 'Посетите нас'
    },
    text18: {
        en: 'Կատարել պատվեր',
        ru: 'Сделать заказ'
    },
    text19: {
        en: 'Խանութ',
        ru: 'В магазин'
    },
    text20: {
        en: 'Խանութ',
        ru: 'В магазин'
    }
}

const en = document.querySelector('#en');
const ru = document.querySelector('#ru');
const enb = document.querySelector('#enb');
const rub = document.querySelector('#rub');
const allLang = ['en', 'ru'];

en.addEventListener('click', () => {
    changeURLLanguage('en')
});

ru.addEventListener('click', () => {
    changeURLLanguage('ru')
});

enb.addEventListener('click', () => {
    changeURLLanguage('en')

});

rub.addEventListener('click', () => {
    changeURLLanguage('ru')
});


function changeURLLanguage(lang) {
    if (window.location.hash !== ('#' + lang)) {
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
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();