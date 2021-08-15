import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCarousel();
  }
  public initCarousel() {
    $('.banner-carousel').owlCarousel({
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      autoplayTimeout: 7000,
      navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }
}
