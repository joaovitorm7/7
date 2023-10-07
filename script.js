function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = ''  
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero ='Homen'
            if (idade >=0 && idade < 5){
                //bebê
                img.setAttribute('src', 'img/bebe-homen.png')
            } else if(idade >= 5 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/crianca-homen.png')
            }else if (idade > 12 && idade < 22) {
                //jovem
                img.setAttribute('src', 'img/jovem-homen.png')
            } else if (idade > 22 && idade < 50 ) {
                //adulto
                img.setAttribute('src', 'img/adulto-homen.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-homen.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 5){
                //bebe
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if(idade >=5 && idade < 12){
                //criança
                img.setAttribute('src', 'img/crianca-mulher.png')
            }
            else if (idade >=12 && idade < 22) {
                //jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade >=22 && idade < 50 ) {
                //adulto
                img.setAttribute('src', 'img/adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.img = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}