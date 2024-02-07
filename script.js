function soma(){
    const valor1 = document.getElementById('valor1')
    const valor2 = document.getElementById('valor2')

    const peso = Number(valor1.value)
    const altura = Number(valor2.value)

    const soma = peso / (altura * altura)

    document.getElementById("resultado").innerText = `\n${peso} / ${altura} * ${altura}. \n O resultado é: ${soma.toFixed(2)}`
    
    if(soma < 16.90){
        document.getElementById("resultado").innerText += `\nMenor que 16,90. Muito abaixo do peso`
    }else if(soma >= 16.90 && soma <= 18.40){
        document.getElementById("resultado").innerText += `\n17, a 18,40. Abaixo do peso`
    } else if(soma >= 18.50 && soma <= 24.90){
        document.getElementById("resultado").innerText += `\n18,50 a 24,90. Peso normal`
    }else if(soma >= 24.90 && soma <= 29.90){
        document.getElementById("resultado").innerText += `\n25 a 29,90. Acima do peso`
    }else if(soma >= 30 && soma <= 34.90){
        document.getElementById("resultado").innerText += `\n30 a 34,90. Obesidade grau 1`
    }else if(soma >= 35 && soma <= 39.90){
        document.getElementById("resultado").innerText += `\n35 a 40. Obesidade grau 2`
    }else {
        document.getElementById("resultado").innerText += `\nMaior que 40. Obesidade grau 3`
    }
}