import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mostrarlanche',
  templateUrl: './mostrarlanche.page.html',
  styleUrls: ['./mostrarlanche.page.scss'],
})
export class MostrarlanchePage implements OnInit {

  produtos: any [] = [];
  categoria: any;

  constructor(private api: ApiService, private activadRoute: ActivatedRoute, private rota: Router, private data: DataService) { }

  ngOnInit() {
    const id = this.activadRoute.snapshot.params['id'];
    this.api.obter(`produtos?categoria_id=${id}`).subscribe(result => this.produtos = result);
    this.api.obter(`categorias/${id}`).subscribe(result => this.categoria = result);

  }

  ircarrinho(produto: any){

    this.data.iniciarCarrinho()
    this.data.carrinho.produtos.push(produto)
    console.log(this.data.carrinho)
    this.rota.navigate(["/tabs/carrinho/"])

}
}
