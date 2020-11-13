
function jogarDado(){
    dado = Math.random() * (7-1) + 1
    return Math.floor(dado)
}


let verificadora = 0
while(verificadora != 6){
    verificadora = jogarDado()
    console.log(verificadora)
}