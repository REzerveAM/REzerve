const cards = [{
    name: 'Mayka-jij',
    price: '7000 AMD',
    photoLink: 'mayka_erexa.png'
}, {
    name: 'Zip Hoodie',
    price: '7000 AMD',
    photoLink: 'unisex white .png'
}, {
    name: 'Bananka',
    price: '7000 AMD',
    photoLink: 'bananka white .png'
},
{
    name: 'Arirpods',
    price: '7000 AMD',
    photoLink: 'airpods pro .png'
},
{
    name: 'Iphone-case',
    price: '7000 AMD',
    photoLink: 'iphone - case.png'
},
{
    name: 'Bag',
    price: '7000 AMD',
    photoLink: 'bag blue.png'
},
{
    name: 'Shoper',
    price: '7000 AMD',
    photoLink: 'bag.png'
},
{
    name: 'Bag',
    price: '7000 AMD',
    photoLink: 'Shuffle bag.png'
},
{
    name: 'Bag',
    price: '7000 AMD',
    photoLink: 'bag black.png'
},
{
    name: 'Bananka',
    price: '7000 AMD',
    photoLink: 'bananka.png'
},
{
    name: 'Hoodie',
    price: '7000 AMD',
    photoLink: 'pink hudi.png'
},
{
    name: 'Hoodie',
    price: '7000 AMD',
    photoLink: 'seri hudi.png'
},
];

const contImg = document.querySelector('.cont-img');

cards.forEach(card => {
    let html = `<div class="card">
    <img class="card-nkar" src="img-shor/${card.photoLink}" alt="">
    <div class="nixuya">
        <span class="shor-name">${card.name}</span>
        <span class="gin">${card.price}</span> 
    </div> 
    </div>`;
    contImg.insertAdjacentHTML('beforeend', html);
});
