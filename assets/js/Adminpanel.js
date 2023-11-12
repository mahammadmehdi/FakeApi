fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data =>{
data.forEach(element => {
    CreateCard(element.id,element.Ad,element.Soyad,element.Spikerlik,element.update,element.delet)
});
    })
    .catch(err => console.log("error", err.message))

function CreateCard(id, Ad, Soyad, Spikerlik,update,delet) {
    const card = document.createElement("div")
    const cardID = document.createElement("div")
    const cardAd = document.createElement("div")
    const cardSoyad = document.createElement("div")
    const cardSpikerlik = document.createElement("div")
    const cardupdate = document.createElement("a")
    const carddelet = document.createElement("a")

    cardupdate.setAttribute("href", "./AdminPanelUpdate.html");
    carddelet.setAttribute("href", removeEventListener.card)


    card.style.border="3px solid black"
    card.style.backgroundColor="black"
    card.style.color="white"
    card.style.position="relative"
    cardAd.style.position="absolute"
    cardAd.style.left="400px"
    cardSoyad.style.position="absolute"
    cardSoyad.style.left="700px"
    cardSpikerlik.style.paddingLeft="100px"
    cardupdate.style.position="absolute"
    cardupdate.style.left="900px"
    cardupdate.style.top="10px"
    cardupdate.style.width="70px"
    cardupdate.style.height="25px"
    cardupdate.style.border="1px solid black"
    cardupdate.style.backgroundColor="gray"
    cardupdate.style.color="white"
    cardupdate.style.borderRadius="30px"
    cardupdate.style.textAlign="center"
    carddelet.style.position="absolute"
    carddelet.style.left="1100px"
    carddelet.style.top="10px"
    carddelet.style.width="70px"
    carddelet.style.height="25px"
    carddelet.style.border="1px solid black"
    carddelet.style.backgroundColor="gray"
    carddelet.style.color="white"
    carddelet.style.borderRadius="30px"
    carddelet.style.textAlign="center"

    




    

    





    
 


    

    






     cardID.textContent=id
     cardAd.textContent=Ad
     cardSoyad.textContent=Soyad
     cardSpikerlik.textContent=Spikerlik
     cardupdate.textContent="update"
     carddelet.textContent="delete"



     card.append(cardID,cardAd,cardSoyad,cardSpikerlik,cardupdate,carddelet)
     document.body.appendChild(card)
}