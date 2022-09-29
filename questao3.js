var alunos = [["Diogo", 7.5, 8, 0],
["Giulia", 9, 10, 0],
["Jose", 6, 7, 0]];
let pesoNota1 = 0.6;
let pesoNota2 = 0.4;
i = 0;
j = 0;
function mostrarNotas() {
  while (i < 3) {
    alert(`Aluno: ${alunos[i][0]}\n Nota 1: ${alunos[i][1]} \n Nota 2: ${alunos[i][2]}`);
    alunos[i][3] = (alunos[i][1] * pesoNota1) + (alunos[i][2] * pesoNota2);
    alert("\n Aluno: " + alunos[i][0] + "\n Média: " + alunos[i][3]);
    i++;

  }
  for (j = 0; j < alunos.length; j++) {
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "<br>" + "O aluno " + alunos[j][0] + " teve a nota 1: " + alunos[j][1] + " teve a nota 2: " + alunos[j][2] + " e a média: " + alunos[j][3];
  }
  
}

















