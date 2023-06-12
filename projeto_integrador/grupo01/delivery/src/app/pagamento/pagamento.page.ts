import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  pagamento: any;
  total= 0;


  constructor(private data: DataService, private rota: Router, private api: ApiService) { }

  ngOnInit() {
    this.total=this.data.carrinho.produtos.map((produto: any) => produto.preco).reduce((valor1: number, valor2: number) => valor1 + valor2)
    
  }
  finalizarPedido(){
    this.data.carrinho.total=this.total;
    this.data.carrinho.pagamento=this.pagamento;
    this.data.carrinho.status="Aguardando confirmação";
    this.data.carrinho.produtos=this.data.carrinho.produtos.map((produto: any) =>  { 
     return {produto_id: produto.id, valor: produto.preco}
    });

    this.api.salvar(this.data.carrinho, "pedidos").subscribe();
    this.rota.navigate(["/tabs/pedidos"]);

  }
}
