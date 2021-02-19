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
/*Armazena a lista dos alunos em um array*/
getsLinha = [];
while((linha = gets()) != "FIM")  getsLinha.push(linha);

/*Cria array de objeto. Armazena a lista de amigos em um 
array e armazena em outro array os que votaram em SIM*/
vSim = [];
listaAlunos = [];
/*No filter() Remove itens repetidos e armazena o resultado em uma variavel 'semItensRepetidos'*/
for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
  arrAux = semItensRepetidos[i].split(" ");  
  listaAlunos.push({nome: arrAux[0], valor: arrAux[1]}); 
  /*armazena os que votaram em SIM*/
  if (arrAux[1] === 'SIM') vSim.push({nome: arrAux[0], valor: arrAux[1]}); 
}

/*Ordena toda lista de Alunos e imprime resultado*/
listaAlunos.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
           .map(item => console.log(item.nome));

/*Ordena a lista dos que votaram em SIM, referente a 
quantidade de letras do primeiro nome e imprime o vencedor.*/
vSim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);