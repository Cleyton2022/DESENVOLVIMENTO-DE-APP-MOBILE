import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public carrinho: any;

  constructor() { }

  iniciarCarrinho(){

    if(!this.carrinho){
    this.carrinho= {
      produtos:[],
      total: 0,
      status: "CRIADO",
    }
    }
  }


criarCarrinho(chave: string, carrinho: any){

localStorage.setItem(chave,JSON.stringify(carrinho))

}

atualizarCarrinho(chave: string, carrinho: any){
  localStorage.setItem(chave,JSON.stringify(carrinho))
  
}

removerCarrinho(chave: string, carrinho: any){
  localStorage.removeItem(chave);
  
}



obterCarrinho(chave: string){
  return JSON.parse(localStorage.getItem(chave)!);
}


}
