import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgwWowModule } from 'ngx-wow';
import { BannerComponent } from './banner/banner.component';
import { GameViewComponent } from './game-view/game-view.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturedComponent } from './featured/featured.component';
import { ParallaxSectionComponent } from './parallax-section/parallax-section.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GameViewComponent,
    ReviewsComponent,
    GalleryComponent,
    FeaturedComponent,
    ParallaxSectionComponent,
    FaqComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
