
function snapCrackle(maxValue){
    let texto = '';
    for (let i = 1; i <= maxValue; i++){
        if (i % 2 == 1 && i % 5 !== 0){
            texto = texto + 'Snap, ';
        }
        else if (i % 2 == 1 && i % 5 == 0){
            texto = texto + 'SnapCrackle, ';
        }
        else if (i % 5 == 0){
            texto = texto + 'Crackle, ';
        }
        else if (i % 2 !== 1 && i % 5 !== 0){
            texto = texto + i + ', ';
        }
    } console.log(texto)
}snapCrackle(12)

