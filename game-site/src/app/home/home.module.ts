import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ParallaxSectionComponent } from './parallax-section/parallax-section.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TokenomicsComponent } from './tokenomics/tokenomics.component';
import { HomeComponent } from './home.component';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [
    BannerComponent,
    GalleryComponent,
    FeaturedComponent,
    ParallaxSectionComponent,
    RoadmapComponent,
    TokenomicsComponent,
    FeaturesComponent,
    SponsorsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgwWowModule,
  ]
})
export class HomeModule { }
