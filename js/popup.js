function showModal(cardId) {
    const cardInfo = cards.find(card => card.id === cardId);
    console.log(cardInfo);
    let nkarner = cardInfo.photoLink.map((nkar)=>{
        return `<img src="img-shor/${nkar}" alt="">`
    });
    const html = `
    <div class="modal__container">
            <div class="modal__body">
            <div class="modal__header">
            ${cardInfo.name}
            </div>
            <div class="modal__close">
            <a href="#">
            &times
            </a>
                    <section class="grid-1">
                    <div class="left-panel">
                ${nkarner.join('')}
                    </div>
                    </section>
                </div>
                <div class="modal__content">
                <img class="modal__img" src="img-shor/${cardInfo.photoLink[0]}" alt="">
                <br>
                <hr>
                <br>
                <div class="modal__price">
                    ${cardInfo.price}<br>   
                </div>
                <div class="modal__class">
                ${cardInfo.key}<br>
                </div>
                    <br>
                    <div class="modal__buttonbar">
                    <a href="https://www.instagram.com/rezerve.shop">
                        <button class='buttonbar__ok'>Buy</button>
                        </a>
                        </div>
                </div>
            </div>
        </div>
    `;

    const container = document.querySelector('.popup-modal-container');
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    console.log(modalElement);
    modalElement.insertAdjacentHTML('beforeend', html);
    console.log(modalElement);

    const maxImg = modalElement.querySelector('.modal__img');
    modalElement.querySelectorAll('.left-panel img').forEach(item => item.onclick = (event) => maxImg.src = event.target.src)
    const closeBtn = modalElement.querySelector('.modal__close a');
    const okBtn = modalElement.querySelector('.buttonbar__ok');

    function hide() {
        container.innerHTML = '';
        modalElement.classList.remove('visible');
        document.body.classList.remove('modal__visible');
    }

    closeBtn.addEventListener('click', () => {
        hide();
    });

    function show() {
        modalElement.classList.add('visible');
        document.body.classList.add('modal__visible');
    }
    
    okBtn.addEventListener('click', () => {
        hide();
    });

    container.insertAdjacentElement('beforeend', modalElement);

    show();
}



function addClickEventToCards() {
    const showBtn = document.querySelectorAll('.popup-modal');
    showBtn.forEach((button) => {
        button.addEventListener('click', () => {
            let btnId = button.getAttribute('id');
            btnId = btnId.split('_')[1];
            showModal(btnId);
        });
    });
}

addClickEventToCards();


// const select = document.querySelector('select');


