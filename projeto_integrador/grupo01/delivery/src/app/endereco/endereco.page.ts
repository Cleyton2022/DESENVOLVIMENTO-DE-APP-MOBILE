import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  cep = '';
  endereco = '';
  numero = '';
  telefone = '';
  

  constructor(private rota: Router, private data: DataService) { }

  ngOnInit() {
  }

  irPagamento(){
  
    this.data.carrinho.endereco= `${this.cep}, ${this.endereco}, ${this.numero}, ${this.telefone}`;

    this.rota.navigate(['/tabs/pagamento'])
    console.log(this.data.carrinho);
  }

}
