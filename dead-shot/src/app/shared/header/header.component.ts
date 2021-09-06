import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { DownloadService } from 'src/app/services/download.service';
import { Web3Service } from 'src/app/services/web3.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public toggleMetamaskIconStatus: boolean = false;
  public fragment: string = '';

  constructor(private _router: Router, private _route: ActivatedRoute, private _download: DownloadService, private _web3: Web3Service) { }

  ngOnInit(): void {
    $(window).on('scroll', () => {
      this.initHeaderStyle();
    });
    this.initHeaderStyle();
    this.initSubMenuToggle();
    this.initMobileMenuToggle();
    // this.checkWeb3();
    this.routeChangeEvent();
  }
  public routeChangeEvent() {
    this._router.events.pipe(debounceTime(200), distinctUntilChanged()).subscribe(r => {
      this.fragment = <string>this._route.snapshot.fragment;
    });
  }
  public initHeaderStyle() {
    var windowpos = $(window).scrollTop();
    var siteHeader = $('.main-header');
    var scrollLink = $('.scroll-to-top');
    var sticky_header = $('.main-header .sticky-header');
    if (windowpos > 100) {
      siteHeader.addClass('fixed-header');
      sticky_header.addClass("animated slideInDown");
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass('fixed-header');
      sticky_header.removeClass("animated slideInDown");
      scrollLink.fadeOut(300);
    }
  }

  public initSubMenuToggle(): void {
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
  }

  public initMobileMenuToggle(): void {
    $('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    // $('.sticky-header .main-menu').append(mobileMenuContent);

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', () => {
      $(this).toggleClass('open');
      $(this).prev('ul').slideToggle(500);
    });
    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');
    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
    });

    $(document).keydown(function (e: any) {
      if (e.keyCode === 27) {
        $('body').removeClass('mobile-menu-visible');
      }
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
