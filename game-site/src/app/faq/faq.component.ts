import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.initAccordion();
  }

  public initAccordion() {
    $(".accordion-box").on('click', '.acc-btn', (): any => {

      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) { $(outerBox).find('.accordion .acc-btn').removeClass('active'); }

      if ($(this).next('.acc-content').is(':visible')) { return false; }
      else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }
}
