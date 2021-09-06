import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCarousel();
  }
  public initCarousel(): void {
    $('.sponsors-carousel').owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        800: {
          items: 4
        },
        1024: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
  }
}
