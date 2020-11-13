function informaNota(nota){
    if (nota >= 7){
        console.log(`Muito bem você foi aprovado com nota ${nota}`)
    }else{
        console.log(`Que pena você está reprovado com nota ${nota}`)
    }
}

informaNota(5)
informaNota(10)
informaNota(7)