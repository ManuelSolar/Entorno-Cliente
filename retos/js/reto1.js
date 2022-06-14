const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

const contarOvejas = function(ovejas){
    return ovejas.filter(oveja => {
        let contieneA = oveja.name.toLowerCase().includes('a')
        let contieneN = oveja.name.toLowerCase().includes('n')
        let esRoja = oveja.color === 'rojo';
        return contieneA && contieneN && esRoja;
    })
};