fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data =>{
data.forEach(element => {
    CreateCard(element.id,element.Ad,element.Soyad,element.Spikerlik)
});
    })
    .catch(err => console.log("error", err.message))

function CreateCard(id, Ad, Soyad, Spikerlik) {
    const card = document.createElement("div")
    const cardID = document.createElement("div")
    const cardAd = document.createElement("div")
    const cardSoyad = document.createElement("div")
    const cardSpikerlik = document.createElement("div")

    card.style.border="3px solid black"
    card.style.backgroundColor="black"
    card.style.color="white"
    card.style.margin="20px"
    card.style.width="200px"
    card.style.height="300px"
    card.style.display="flex"
    card.style.flexDirection="column"
    card.style.gap="50px"
    card.style.textAlign="center"


    

    






     cardID.textContent=id
     cardAd.textContent=Ad
     cardSoyad.textContent=Soyad
     cardSpikerlik.textContent=Spikerlik

     card.append(cardID,cardAd,cardSoyad,cardSpikerlik)
     document.body.appendChild(card)
}