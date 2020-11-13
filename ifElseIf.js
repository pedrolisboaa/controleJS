function podeVotar(idade){
    if (idade < 16){
        console.log("Não pode Votar!")
    }else if (idade >= 16 && idade < 18){
        console.log("Voto não obrigatório!")
    }else if (idade > 18 && idade <= 65){
        console.log("Voto obrigatório!")
    }else if (idade > 65){
        console.log("Voto não obrigatório (idoso)")
    }else{
        console.log("Idade inválida.")
    }
}

podeVotar(15)
podeVotar(16)
podeVotar(17)
podeVotar(20)
podeVotar(45)
podeVotar(65)
podeVotar(100)
podeVotar(70)
podeVotar("pedro")