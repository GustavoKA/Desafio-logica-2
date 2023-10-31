//variaveis usadas
let ranked = ""
//função de calcular vitoria e derrota
function calculadordePDL(vitoria,derrota){
    let totalPdl= vitoria-derrota
    return totalPdl
}
//cada vitoria do dia ele adiciona 2+ um ponto de vitória, não é acumulativo. e cada derrota ele diminui -1 do saldo total de derrotas
let vd=10
let de =5
for (i=0; i<=30; i++){
    vd+=2
    de +=1
}

let saldoRanked= calculadordePDL(vd,de)
if (saldoRanked<=10){
    ranked="Ferro"
}else if (saldoRanked<=11 || saldoRanked<=20){
    ranked="Bronze"
}else if (saldoRanked<=21 || saldoRanked<=50){
    ranked= "PRATA"
}else if(saldoRanked<=51 || saldoRanked<=80){
    ranked="OURO"
}else if(saldoRanked<=81 || saldoRanked<=90){
    ranked="DIAMANTE"
}else if(saldoRanked<=91 || saldoRanked<=100){
    ranked= "LENDARIO"
} else {
    ranked="IMORTAL"
}
   
console.log ("Heroi tem um saldo de " + saldoRanked+ " está no nivel de "+ ranked )
