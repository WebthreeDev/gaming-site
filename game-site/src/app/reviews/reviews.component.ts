import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initSlider();
  }

  public initSlider() {
    var $sync1 = $(".testimonial-slider .text-carousel"),
      $sync2 = $(".testimonial-slider .thumb-carousel"),
      flag = false,
      duration = 500;

    $sync1
      .owlCarousel({
        loop: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeInLeft',
        items: 1,
        margin: 20,
        nav: true,
        navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000
      })
      .on('changed.owl.carousel', function (e: any) {
        if (!flag) {
          flag = false;
          $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
          flag = false;
        }
      });

    $sync2
      .owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        nav: false,
        navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 3
          },
          600: {
            items: 3
          },
          768: {
            items: 3
          },
          1024: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      })
      .on('click', '.owl-item', () => {
        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
      })
      .on('changed.owl.carousel', function (e: any) {
        if (!flag) {
          flag = true;
          $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
          flag = false;
        }
      });
  }
}
