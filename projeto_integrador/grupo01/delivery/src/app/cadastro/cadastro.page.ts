import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  
  email = '';
  senha = '';
  confsenha = '';


  constructor(private api: ApiService, private dialog: DialogService) { }

  ngOnInit() {
  }

  cadastrar(){

    if(this.senha === this.confsenha){

    
    this.api.salvar({login:this.email, senha:this.senha}, "usuarios" )
    .subscribe( 
      () => {
        this.dialog.showSuccessAlert()
        this.email = '';
        this.senha = '';
        this.confsenha = '';

      },
      err => {
        this.dialog.showErrorAlert()

      }
    )
    }else{
      this.dialog.showAlert("Erro", "As senhas não são compativeis")
    }

    console.log(`email: ${this.email}, senha: ${this.senha}, confsenha: ${this.confsenha}`)
  }


}
