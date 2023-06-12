import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos: any [] = [];


  constructor(private rota: Router, private api: ApiService) { }

  ngOnInit() {
setInterval( () => {
  this.api.obter("pedidos?_sort=id&_order=desc").subscribe(result => this.pedidos=result);

}, 1000)

  }

  

}
