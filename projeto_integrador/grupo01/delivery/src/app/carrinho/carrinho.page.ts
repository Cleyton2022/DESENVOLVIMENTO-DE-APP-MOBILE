import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private rota: Router, public data: DataService) { }



  ngOnInit() {

  }

  irEndereco(){
    this.rota.navigate(['/tabs/endereco'])
    
  }

}
