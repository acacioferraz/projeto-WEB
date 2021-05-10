function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var mes = data.getMonth()
    var sec = data.getSeconds()
    var mili = data.getUTCMilliseconds()
    msg.innerHTML = `Agora são ${hora} horas ${min} minutos ${sec} segundos e ${mili} milessegundos do mes ${mes+1}.`
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        alert("Bom Dia!")
        img.src = 'fotomanha.png'
        document.body.style.background = '#e7bd8d'
    }else if(hora >= 12 && hora <= 18){
        alert("Bom Tarde!")
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#ad775f'
    }else{
        alert("Boa Noite!")
        // Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#384450'
    }
}