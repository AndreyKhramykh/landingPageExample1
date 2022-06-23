function displayOn() {
    let phone = document.querySelector('.phone');

    setTimeout(() => {
        phone.style.display = 'block';
    }, 4000);
}

displayOn();

let phoneImg = document.querySelector('.phone__img');

phoneImg.onclick = () => {
 let contactMenu = document.querySelector('.contactMenu');
  
 contactMenu.classList.toggle('contactMenu__show');
}

let telegramIcon = document.querySelector('.socMedias__img.socMedias__img_telegram');

telegramIcon.onclick = () => {
    let telegramContact = document.querySelector('.telegramContact');

    telegramContact.classList.toggle('telegramContact__show');
}


