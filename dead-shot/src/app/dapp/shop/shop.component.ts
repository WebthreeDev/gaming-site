import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private wowService: NgwWowService, private _web3: Web3Service) { }


  ngOnInit(): void {
    this.wowService.init();
    // this.web3Init()
  }
  web3Init() {
    const web3Init = this._web3.checkAndInstantiateWeb3();
    console.log(web3Init)
  }
}
