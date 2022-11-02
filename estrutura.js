/*
    escreval("Digite o nome do aluno:")
    leia(nome)
   escreval("Digite a primeira nota do aluno:")
   leia(notaum)
   escreval ("Digite a segunda nota do aluno:")
   leia(notadois)
   media := (notaum + notadois) / 2
   
   se media >= 5  entao
   escreval("Aprovado!")
   senao
   escreval ("Reprovado!")
   fimse

*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota do aluno:")
nota02 = prompt("Digite a segunda nota do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if
(media >= 5)
    alert("Aprovado!")
else
    alert("Reprovado!")