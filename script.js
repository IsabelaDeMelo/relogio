var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')

if (hora >= 0 && hora <= 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto} horas.`
    img.src = "imgs/manha.webp"
    document.body.style.background = "rgb(85, 215, 255)"
    
} 

else if (hora >= 13 && hora <=17) {
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${minuto} horas.`
    img.src = "imgs/tarde.jpeg"
    document.body.style.background = "rgba(0, 221, 147, 0.685)"
}

else if (hora >=18) {
    msg.innerHTML = `Boa noite! Agora são ${hora}:${minuto} horas.`
    img.src = "imgs/noite.jpeg"
    document.body.style.background = "rgb(20, 0, 36)"
}