import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss']
})
export class NavItemsComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // this._route.
  }

  public fragmentRoute(baseURL: string, fragment: any): void {
    this._router.navigate([baseURL], { fragment: fragment })
  }
}
