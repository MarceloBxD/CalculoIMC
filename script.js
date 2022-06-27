var resultado = document.querySelector('.resultado');
var btn = document.querySelector('.button');
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
// 

const formula = Number(peso/Math.pow(altura, 2)).toFixed(2);
btn.addEventListener('click', (e) => {
    var alturaValue = altura.value;
    var pesoValue = peso.value;
    const resultado = Number((pesoValue / Math.pow(alturaValue, 2)).toFixed(2));
    document.querySelector('.resultado').innerHTML = resultado;
    e.preventDefault();
    if(document.querySelector('.resultado').classList.contains('hidden')){
        document.querySelector('.resultado').classList.remove('hidden');
    }
    else{
        document.querySelector('.resultado').classList.add('hidden');
    }

    if(resultado < 18.5){
        document.querySelector('.message').innerHTML = 'Você está abaixo do peso!';
    }
    else if(resultado >= 18.5 && resultado <= 24.9){
        document.querySelector('.message').innerHTML = 'Você está com o peso normal!';
    }
    else if(resultado >= 25 && resultado <= 29.9){
        document.querySelector('.message').innerHTML = 'Você está com sobrepeso!';
    }
    else if(resultado >= 30 && resultado <= 34.9){
        document.querySelector('.message').innerHTML = 'Você está com obesidade grau I!';
    }
    else if(resultado >= 35 && resultado <= 39.9){
        document.querySelector('.message').innerHTML = 'Você está com obesidade grau II!';
    }
    else if(resultado >= 40){
        document.querySelector('.message').innerHTML = 'Você está com obesidade grau III!';
    }
});
