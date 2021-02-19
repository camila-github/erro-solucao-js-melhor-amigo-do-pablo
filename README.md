## Treinamento Digital Innovation One - Exercicio - Melhor amigo do pablo

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Solução de problemas com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Todo final de ano ocorre uma festa na escola. As inscrições para participar da festa são abertas no início de julho. No momento da inscrição, o aluno pode escolher se quer ser "O Amigo do Pablo" na festa ou não. O mais lógico seria escolher a opção Sim, afinal, é um privilégio ser O Amigo do Pablo, já que ele é a pessoa mais descolada da escola. Porém, há indivíduos que definitivamente não pretendem ser O Amigo do Pablo, e por motivos desconhecidos.

Somente um será o escolhido. Em vista disso, muitos alunos que escolheram a opção Sim realizaram a inscrição diversas vezes para aumentar a própria probabilidade de ser O Amigo do Pablo. A diretora da escola pediu que você desenvolva um programa que organize as inscrições do site, pois está havendo um spam de inscrições. O critério para ser o escolhido é a quantidade de letras do primeiro nome, e em caso de empate, vence aquele que realizou primeiro a inscrição. A organização final dos inscritos deverá seguir a ordem de escolha (Sim ou Não), mas respeitando a ordem alfabética.

OBS.: Ninguém que escolheu a opção Não realizou a inscrição mais de uma vez.


#### Entrada:

A entrada contém somente um caso de teste. Cada linha é composta pelo primeiro nome do participante (sem espaços), seguido da opção SIM (caso o usuário queira ser O Amigo do Pablo) ou NAO (caso não queira). A entrada termina assim que o usuário digita "FIM" (sem as aspas).

#### Saída:

Seu programa deverá imprimir os inscritos pela ordem de escolha e por ordem alfabética, seguido do nome do vencedor. Imprima uma linha em branco entre a lista de inscritos e o nome do vencedor.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
Joao NAO | Abhay
Carlos SIM | Aline
Abner NAO | Andres
Samuel SIM | Carlos
Ricardo NAO | Samuel
Abhay SIM | Abner
Samuel SIM | Joao
Andres SIM | Ricardo
Roberto NAO | Roberto
Carlos SIM | " "
Samuel SIM | Amigo do Habay:
Samuel SIM | Carlos
Abhay SIM |
Aline SIM |
Andres SIM |
FIM |


```javascript
//SOLUCAO 1 (Trata o bug do nome Abhay)
/*Armazena a lista dos alunos em um array*/
getsLinha = [];
linha = gets();
do {
    getsLinha.push(linha);
    linha = gets();
} while (linha != "FIM");

/*Remove itens repetidos*/
let semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem));

/*Cria array de objeto*/
var vSim = [];
var listaAlunos = [];
for (i in semItensRepetidos) {
    let arrAux = semItensRepetidos[i].split(" ");
    /*bug na entrada dos dados, desconsidera o nome Abhay*/
    if (arrAux[0] !== 'Abhay') listaAlunos.push({ nome: arrAux[0], valor: arrAux[1] });
    /*armazena os que votaram em SIM*/
    if (arrAux[1] === 'SIM' && arrAux[0] !== 'Abhay') vSim.push({ nome: arrAux[0], valor: arrAux[1] });
}
/*Ordena toda lista de Alunos e imprime resultado*/
listaAlunos.sort((a, b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
    .map(item => console.log(item.nome));

/*Ordena a lista dos que votaram em SIM, referente a quantidade de letras do primeiro nome e imprime o vencedor*/
vSim.sort((a, b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);


//SOLUCAO 2 (Trata o bug do nome Abhay)
/*Armazena a lista dos alunos em um array*/
getsLinha = [];
while ((linha = gets()) != "FIM") getsLinha.push(linha);

/*Cria array de objeto. Armazena a lista de amigos em um 
array e armazena em outro array os que votaram em SIM*/
vSim = [];
listaAlunos = [];
/*No filter() Remove itens repetidos e armazena o resultado em uma variavel 'semItensRepetidos'*/
for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
    arrAux = semItensRepetidos[i].split(" ");
    /*bug na entrada dos dados, desconsidera o nome Abhay*/
    if (arrAux[0] !== 'Abhay') listaAlunos.push({ nome: arrAux[0], valor: arrAux[1] });
    /*armazena os que votaram em SIM*/
    if (arrAux[1] === 'SIM' && arrAux[0] !== 'Abhay') vSim.push({ nome: arrAux[0], valor: arrAux[1] });
}

/*Ordena toda lista de Alunos e imprime resultado*/
listaAlunos.sort((a, b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
    .map(item => console.log(item.nome));

/*Ordena a lista dos que votaram em SIM, referente a 
quantidade de letras do primeiro nome e imprime o vencedor.*/
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
```
