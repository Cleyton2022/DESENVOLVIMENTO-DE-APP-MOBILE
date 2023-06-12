import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarlanchePageRoutingModule } from './mostrarlanche-routing.module';

import { MostrarlanchePage } from './mostrarlanche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarlanchePageRoutingModule
  ],
  declarations: [MostrarlanchePage]
})
export class MostrarlanchePageModule {}
