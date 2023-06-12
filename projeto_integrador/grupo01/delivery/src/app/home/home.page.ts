import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  produtos: any[] = [];
  categorias: any[] = [];  
    
  constructor(private api: ApiService, private rota: Router) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.api.obter('produtos')
    .subscribe( result => this.produtos = result);
    this.api.obter('categorias')
    .subscribe( result => this.categorias = result);
  }

  detalharcategoria(produto: any){
    this.rota.navigate(["/tabs/mostrarlanche/" + produto.id])

  }




}
