import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DappRoutingModule } from './dapp-routing.module';
import { ShopComponent } from './shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    DappRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class DappModule { }
