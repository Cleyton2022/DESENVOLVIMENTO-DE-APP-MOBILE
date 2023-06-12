import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = '';
  senha = '';


  constructor(private rota: Router, private api: ApiService) { }

  ngOnInit() {
  }

  entrar(){
    this.api.login(this.login)
    .subscribe((usuario:any)=> {
        if(usuario[0] &&  usuario[0].senha === this.senha){
          sessionStorage.setItem("usuario_logado",JSON.stringify(usuario[0]))
          this.rota.navigate(['/tabs/home'])
      }else{
        console.log("Usuario ou senha incorretos.")
      }
    })
    
    
  }

  cadastro(){
    this.rota.navigate(['/cadastro'])
  }

}
