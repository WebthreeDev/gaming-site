import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss']
})
export class NavItemsComponent implements OnInit {

  constructor(private _router: Router, private _download: DownloadService) { }

  ngOnInit(): void { }

  public fragmentRoute(baseURL: string, fragment: any): void {
    this._router.navigate([baseURL], { fragment: fragment })
  }
  public downloadLitePaper(): void {
    this._download.exportPdf();
  }
  public navigateToPage(route: string): void {
    this._router.navigate([route])
  }
}
