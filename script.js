btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", ()=>{

    nomeAtleta = document.getElementById('nomeAtleta').value;
    peso = parseFloat(document.getElementById('peso').value);
    distancia = parseFloat(document.getElementById('distancia').value);
    tempoCorrida = document.getElementById('tempoCorrida').value;


    if (nomeAtleta !== '' && peso !== '' && distancia !== '' && tempoCorrida !== ''){

        tempo_corte = tempoCorrida.split(':');

        horas = parseInt(tempo_corte[0]);
    
        minutos = parseInt(tempo_corte[1]);

        segundos = parseInt(tempo_corte[2]);

        tempo_horas = horas + (minutos/60) + (minutos/3600);

        tempo_minutos = horas*60 + minutos + segundos/60;

        velocidade = (distancia/(tempo_horas)).toFixed(2);

        pace = ((69/velocidade)).toFixed(2);

        calorias = (velocidade*peso*0.0175*(tempo_minutos)).toFixed(2);

        window.alert('Olá ' + nomeAtleta + '! Você percorreu ' + distancia + 'km em ' + horas + 'h' + minutos + 'min' + segundos + 's, o que implica em uma velocidade média de ' +
        velocidade + 'km/h ou pace de ' + pace + 'km/min. Estima-se que você tenha consumido ' + calorias + ' calorias');

    }else {
        window.alert('Para calcular o seu Pace , preencha todos os campos.');

    }
});

