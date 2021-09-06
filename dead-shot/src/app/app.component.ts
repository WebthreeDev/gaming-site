import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Dead shot";

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    $(window).on('load', () => {
      this.initPreloader();
    });
    this.wowService.init();
  }

  public initPreloader(): void {
    $('body').addClass('page-loaded');
    $('.preloader').delay(1500).fadeOut(0);
  }

  public initWowEffects(): void {
    // Elements Animation
  }
}
