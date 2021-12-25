import { Component } from '@angular/core';
import { Disciplina } from 'disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando:any = null
  nome:any = null;
  descricao:any = null
  disciplinas =[
    new Disciplina('Língua Portuguesa', 'O objetivo norteador bla blá'),
    new Disciplina('Educação Física', 'A educação física é blá blá blá'),
    new Disciplina('Ciências','Ciências é a melhor matéria do ensino fundamental')
  ];

  
  salvar(){
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
    } else {
      const d = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(d);
    }
    this.nome = null;
    this.descricao = null;
    this.editando = null;
  }
  
  excluir(disciplina:any) {
   if (this.editando == disciplina){
     alert('Você não pode excluir uma disciplina que stá editando');
   }else{
     if (confirm('Tem certeza que deseja excluir a disciplina"'
        + disciplina.nome + '"?')){
          const i = this.disciplinas.indexOf(disciplina);
          this.disciplinas.splice(i, 1)
        }
   }
  }

  editar(disciplina:any){
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao
    this.editando = disciplina
  }

  cancelar(){
    this.nome = null
    this.descricao = null
    this.editando = null
  }

}
