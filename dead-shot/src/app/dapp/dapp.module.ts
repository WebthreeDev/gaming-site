import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DappRoutingModule } from './dapp-routing.module';
import { ShopComponent } from './shop/shop.component';
import { Web3Service } from '../services/web3.service';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    DappRoutingModule
  ],
  providers: [Web3Service]
})
export class DappModule { }
