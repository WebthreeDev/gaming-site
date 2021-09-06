import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initGallery();
    this.initLightBox();
  }

  public initGallery() {
    $('.gallery-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  }

  public initLightBox() {
    $('.lightbox-image').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: {
        media: {}
      }
    });
  }
}
