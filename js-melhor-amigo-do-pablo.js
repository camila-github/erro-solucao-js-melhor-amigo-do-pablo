//SOLUCAO 1 - (Codigo sem o bug do nome Abhay)
const removerItensRepetidos = (arrInscricoes) => {
  let semItensRepetidos = [];
  let auxAmigosPablo = [];
  semItensRepetidos = arrInscricoes.filter((valorAtual, indexAtual, array) => indexAtual === array.indexOf(valorAtual));
  for (i in semItensRepetidos) {
    let [nome, valor] = semItensRepetidos[i].split(" ");
    auxAmigosPablo.push({ nome: nome, valor: valor });
  }
  return auxAmigosPablo;
}

const votarSim = (arrAmigos) => {
  let vSim = [];
  arrAmigos.map(item => {
     if (item.valor === 'SIM' ) vSim.push({ nome: item.nome, valor: item.valor });
  })
  return vSim;
}

const ordenarListaAmigosPablo = (arrAmigos) => {
  arrAmigos.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
            .map(item => console.log(item.nome))
}

const ordenarListaVotacaoSim = (arrVSim) => {
  arrVSim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
  console.log('Amigo do Pablo:' + '\n' + arrVSim[0].nome);  
}

(function entradaDeDados(str){
  let arrInscricoes = [];
  let amigosPablo = [];
  let amigosVotaramSim = [];;
  
  while(str != "FIM") {
    arrInscricoes.push(str);
    str = gets();
  }
  
  amigosPablo = removerItensRepetidos(arrInscricoes);
  
  amigosVotaramSim = votarSim(amigosPablo);
  
  ordenarListaAmigosPablo(amigosPablo);
  
  ordenarListaVotacaoSim(amigosVotaramSim);
  
})(gets());



//SOLUCAO 2 (Codigo sem o bug do nome Abhay)
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



//SOLUCAO 3 (Trata o bug do nome Abhay)
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



//SOLUCAO 4 (Trata o bug do nome Abhay)
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
