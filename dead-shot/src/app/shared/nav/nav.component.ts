import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadService } from 'src/app/services/download.service';
import { Web3Service } from 'src/app/services/web3.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public toggleMetamaskIconStatus: boolean = false;

  public fragment: string = '';

  constructor(private _router: Router, private _route: ActivatedRoute, private _download: DownloadService, private _web3: Web3Service) { }

  ngOnInit(): void {
    this.routeChangeEvent();
  }
  public routeChangeEvent(): void {
    this._router.events.pipe(debounceTime(200), distinctUntilChanged()).subscribe(r => {
      this.fragment = <string>this._route.snapshot.fragment;
    });
  }
  public fragmentRoute(baseURL: string, fragment: any): void {
    this._router.navigate([baseURL], { fragment: fragment })
  }
  public downloadLitePaper(): void {
    this._download.exportPdf();
  }
  public navigateToPage(route: string): void {
    this._router.navigate([route])
  }
  public checkWeb3() {
    const web3InitStatus = this._web3.checkWeb3();
    this.isWalletConnected(web3InitStatus)
  }
  public web3Init() {
    const web3InitStatus = this._web3.checkAndInstantiateWeb3();
    this.isWalletConnected(web3InitStatus)
  }
  public isWalletConnected(connectionStatus: string): void | boolean {
    if (connectionStatus !== 'connected') return;
    this.toggleMetamaskIconStatus = true;
  }
}
