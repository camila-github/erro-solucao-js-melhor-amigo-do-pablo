//SOLUCAO 1 (Trata o bug do nome Abhay)
getsLinha = [];
linha = gets();
do {
    getsLinha.push(linha);
    linha = gets();
} while (linha != "FIM");

let semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem));

var vSim = [];
var listaAlunos = [];
for (i in semItensRepetidos) {
    let arrAux = semItensRepetidos[i].split(" ");
    if (arrAux[0] !== 'Abhay') listaAlunos.push({ nome: arrAux[0], valor: arrAux[1] });
    if (arrAux[1] === 'SIM' && arrAux[0] !== 'Abhay') vSim.push({ nome: arrAux[0], valor: arrAux[1] });
}
listaAlunos.sort((a, b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
    .map(item => console.log(item.nome));

vSim.sort((a, b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);


//SOLUCAO 2 (Trata o bug do nome Abhay)
getsLinha = [];
while ((linha = gets()) != "FIM") getsLinha.push(linha);

vSim = [];
listaAlunos = [];
for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
    arrAux = semItensRepetidos[i].split(" ");
    if (arrAux[0] !== 'Abhay') listaAlunos.push({ nome: arrAux[0], valor: arrAux[1] });
    if (arrAux[1] === 'SIM' && arrAux[0] !== 'Abhay') vSim.push({ nome: arrAux[0], valor: arrAux[1] });
}

listaAlunos.sort((a, b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
    .map(item => console.log(item.nome));

vSim.sort((a, b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);

//SOLUCAO 3 (Codigo sem o bug do nome Abhay)
getsLinha = [];
while((linha = gets()) != "FIM")  getsLinha.push(linha);

vSim = [];
listaAlunos = [];

for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
    arrAux = semItensRepetidos[i].split(" ");  
    listaAlunos.push({nome: arrAux[0], valor: arrAux[1]}); 
    if (arrAux[1] === 'SIM') vSim.push({nome: arrAux[0], valor: arrAux[1]}); 
}
listaAlunos.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
           .map(item => console.log(item.nome));

vSim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);