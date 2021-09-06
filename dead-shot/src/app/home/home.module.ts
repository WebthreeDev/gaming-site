import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TokenomicsComponent } from './tokenomics/tokenomics.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CoinComponent } from './coin/coin.component';


@NgModule({
  declarations: [
    BannerComponent,
    FeaturesComponent,
    RoadmapComponent,
    SponsorsComponent,
    GalleryComponent,
    TokenomicsComponent,
    ParallaxComponent,
    HomeComponent,
    AboutComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
