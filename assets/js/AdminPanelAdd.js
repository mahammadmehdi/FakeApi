function addApi() {
    let apiAd = document.getElementById('api-ad').value;
    let apiSoyad = document.getElementById('api-Soyad').value;
    let apiSpikerlik = document.getElementById('api-Spikerlik').value;

    let newApiElement = document.createElement('div');
    newApiElement.textContent = apiAd + apiSoyad + apiSpikerlik;
    card.appendChild(newApiElement);


}



