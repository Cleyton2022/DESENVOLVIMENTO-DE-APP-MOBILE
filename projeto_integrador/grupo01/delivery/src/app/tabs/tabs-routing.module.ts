import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'detalhes',
        loadChildren: () => import('../detalhes/detalhes.module').then(m => m.DetalhesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('../carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
      },
      {
        path: 'endereco',
        loadChildren: () => import('../endereco/endereco.module').then(m => m.EnderecoPageModule)
      },

      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },

      {
        path: 'pagamento',
        loadChildren: () => import('../pagamento/pagamento.module').then(m => m.PagamentoPageModule)
      },

      {
        path: 'mostrarlanche',
        loadChildren: () => import('../mostrarlanche/mostrarlanche.module').then(m => m.MostrarlanchePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
