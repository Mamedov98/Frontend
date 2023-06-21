const apiKey = 'a28f493140094586a9b185835231306';

const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
let city;





form.onsubmit = function(event) {
    event.preventDefault();

    city = input.value.trim();
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    removeCard();
    console.log(city);




function  removeCard(){
    const prevCard = document.querySelector('.card');
    if (prevCard) prevCard.remove();
}





function showError(errorMesagge){
    const html = `<div class="card">${errorMesagge}</div>`;

    header.insertAdjacentHTML('afterend', html);
}
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.error) {
                removeCard();
                showError(data.error.message);

            } else {




                showCard(
                    data.location.name,
                    data.location.country,
                    data.current.temp_c,
                    data.current.condition.text,
                    data.current.condition.icon

                );




                 function showCard (name,country,temp,condition,iconUrl){
                     const html = `<div class="card">
          <h2 class="card-city">${name} <span>${country}</span></h2>
          <div class="card-weather">
            <div class="card-value">${temp}<sup> <img style="height: 40px " width="auto" src="the.png"></sup></div>
             <img style="width: 100px; margin-right: 70px "  class="card-img" src="${iconUrl}" alt="Weather">
          </div>
          <div class="card-description">${condition}</div>
        </div>`;
                     const prevCard = document.querySelector('.card');
                     if (prevCard) prevCard.remove();
                     header.insertAdjacentHTML('afterend', html);
                 }

            }

            console.log(data);
            console.log(data.location.name);
            console.log(data.location.country);
            console.log(data.current.temp_c);
        });
};
