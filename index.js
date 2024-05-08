let sum = 0;

for(let win = 3; win < 110; win += 10) {
    sum = sumWinLose(win, 2);
    console.log(`O Herói tem de saldo ${sum} e está no nível ${level(sum)}`);
} 

function sumWinLose(w, l) {
    return w - l;
}
function level(s) {
    if(s <= 10)
        return "Ferro";
    if(s <= 20)
        return "Bronze";
    if(s <= 50)
        return "Prata";
    if(s <= 80)
        return "Ouro";
    if(s <= 90)
        return "Diamante";
    if(s <= 100)
        return "Lendário";
    return "Imortal";
}