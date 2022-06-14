const carta = 'bici coche balón _playstation bici coche peluche';

const listGifts = function(letter){
    const arrayItems = letter.split(' ').filter(gift => !gift.startsWith('_') && gift.trim() !== '');
    const objGifts = {};
    arrayItems.forEach(gift => {
        if(objGifts[gift]){
            objGifts[gift]++;
        } else {
            objGifts[gift] = 1;
        }
    })
    return objGifts;
};

console.log(listGifts(carta));