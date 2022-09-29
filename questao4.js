class Alunos {
  
  constructor(nome, sobrenome, nota1, nota2) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  get nomeC(){ 
    return this.juntaNome();
  }
  juntaNome(){
    return this.nome.concat(this.sobrenome);  
  }
  get media(){
    return this.mediaNota();
  }
  mediaNota(){
    return (this.nota1*0.6)+(this.nota2*0.4);
  }
  get situacao(){
    return this.situacaoAluno();
  }
  situacaoAluno(){
    if ((this.nota1*0.6)+(this.nota2*0.4)>=6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  imprime() {
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "<br>" + "O aluno " + this.nomeC + " teve a media: " + this.media + " e foi " + this.situacao;
  }
}














