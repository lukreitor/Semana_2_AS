// index.js
const Aluno = require('./classes/aluno');
const Turma = require('./classes/turma');
const TurmaPresencial = require('./classes/turmaPresencial');

// Criando instâncias de Aluno
const aluno1 = new Aluno('João', 'joao123', '123456');
const aluno2 = new Aluno('Maria', 'maria456', '654321');

// Exibindo informações dos alunos
console.log('Alunos:');
console.log(aluno1);
console.log(aluno2);

// Criando instâncias de Turma
const turma1 = new Turma('T123', 7);
const turma2 = new Turma('T456', 5);

// Verificando se os alunos foram aprovados nas turmas
console.log('\nAprovação nas turmas:');
console.log(`Aluno 1 aprovado na turma 1: ${turma1.aprovado()}`);
console.log(`Aluno 2 aprovado na turma 2: ${turma2.aprovado()}`);

// Criando instâncias de TurmaPresencial
const turmaPresencial1 = new TurmaPresencial('TP456', 8, 80);
const turmaPresencial2 = new TurmaPresencial('TP789', 6, 70);

// Verificando se os alunos foram aprovados nas turmas presenciais
console.log('\nAprovação nas turmas presenciais:');
console.log(`Aluno 1 aprovado na turma presencial 1: ${turmaPresencial1.aprovado()}`);
console.log(`Aluno 2 aprovado na turma presencial 2: ${turmaPresencial2.aprovado()}`);
