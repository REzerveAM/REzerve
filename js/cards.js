const categories = {
    sneakers: 'Sneakers',
    t_shirt: 'T-Shirts',
    z_hoodie: 'Zip Hoodies',
    bags: 'Bags',
    accessories: 'Accessories',
    hoodie: 'Hoodies',
    trousers: 'Trousers',
    shorts: 'Shorts',
    sweatshirt: 'Sweatshirt'

}

const cards = [{
    id: '0',
    name: 'T-Shirt',
    category: categories.t_shirt,
    price: '6000 AMD',
    photoLink: ['mayka_erexa.png'],
    key: ['Shor', 'mayka'],
}, {
    id: '1',
    name: 'Zip Hoodie',
    category: categories.z_hoodie,
    price: '8500 AMD',
    photoLink: ['unisex white .png'],
    key: ['Shor', 'mayka']
}, {
    id: '2',
    name: 'Bananka',
    category: categories.bags,
    price: '5000 AMD',
    photoLink: ['bananka white .png'],
    key: ['sumka', 'payusak', 'pori harmaranq', 'bumajnik', 'portman', 'psti sunka', 'poqr sunka']
},
{
    id: '3',
    name: 'Arirpods - case',
    category: categories.accessories,
    price: '3500 AMD',
    photoLink: ['airpods pro .png', 'air pods pro back.png', 'air pods pro left.png','air pods pro right.png',],

    key: ['chxol', 'chexol', 'patyan', 'case', 'erik']
},
{
    id: '4',
    name: 'Iphone-case',
    category: categories.accessories,
    price: '3000 AMD',
    photoLink: ['iphone - case.png', 'case - blue.png', 'case - black.png', 'iphone case right.png'],
    key: ['chxol', 'chexol', 'patyan', 'heraxos', 'pupul']
},
{
    id: '5',
    name: 'Shoper',
    category: categories.bags,
    price: '3500 AMD',
    photoLink: ['bag.png'],
    key: ['sumka', 'payusak', 'toprak']
},
{
    id: '6',
    name: 'Bag',
    category: categories.bags,
    price: '15000 AMD',
    photoLink: ['Shuffle bag.png'],
    key: ['sumka', 'payusak', 'sunka']
},
{
    id: '7',
    name: 'Bag',
    category: categories.bags,
    price: '12000 AMD',
    photoLink: ['bag black.png'],
    key: ['sumka', 'payusak', 'sunka']
},
{
    id: '8',
    name: 'Hoodie',
    category: categories.hoodie,
    price: '7500 AMD',
    photoLink: ['black-hudy.png','black hudy - back.png','pink hudi.png','pink hudi-bacl.png','seri hudi.png','seri hudi back.png'],
    key: ['Shor', 'mayka', 'hudi', 'verx', 'taq shor',]
},
{
    id: '9',
    name: 'Sneakers',
    category: categories.sneakers,
    price: '11500 AMD',
    photoLink: ['sneakers.png'],
    key: ['kalosh', 'sapok', 'botas', 'koshik', 'galosh'],
},

];

/* <div class="lox">
<span class="nav-name">Trousers</span>
<span class="nav-name">Shorts</span>
<span class="nav-name">Accessories</span>
</div> */


console.log()

const from = document.querySelector('#from')

from.addEventListener('change', (event) => {
    boss()
})

const upto = document.querySelector('#upto')
upto.addEventListener('change', (event) => {
    boss()
})

const contImg = document.querySelector('.cont-img');
function render(apranqner) {
    contImg.innerHTML = ''
    apranqner.forEach(card => {
        let html = `<div class="card popup-modal" id="card_${card.id}">
        <img class="card-nkar" src="img-shor/${card.photoLink[0]}" alt="">
        <div class="space-between-prace">
            <span class="shor-name">${card.name}</span>
            <span class="gin">${card.price}</span> 
        </div> 
        </div>`;
        contImg.insertAdjacentHTML('beforeend', html);
    });
}

render(cards)

function boss() {
    let fromValue = from.value
    fromValue = parseInt(fromValue)
    let uptoValue = upto.value
    uptoValue = parseInt(uptoValue)
    if (isNaN(fromValue)) {
        fromValue = 0
    }

    if (isNaN(uptoValue)) {
        uptoValue = 100000000000
    }
    const selected = []
    const searchInput = document.querySelector('.input');
    let searchValue = searchInput.value
    console.log(searchValue)
    console.log(fromValue)
    console.log(uptoValue)

    cards.forEach((apranq) => {


        let a = apranq['price'].split(' ')[0]
        let erik = parseInt(a)

        if ((apranq.name.toLowerCase().includes(searchValue.toLowerCase()) || apranq.key.includes(searchValue.toLowerCase())) && (erik >= fromValue && erik <= uptoValue)) {
            selected.push(apranq)
        }

    })
    render(selected)
}

const form = document.querySelector('.input-cont');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    boss()


});




