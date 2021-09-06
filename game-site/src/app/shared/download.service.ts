import { Injectable } from '@angular/core';
import { Assets } from 'src/environments/assets.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  public exportPdf(): void {
    window.open(`${environment.litePaper}${Assets.litepaper}`, '_blank')
  }
}
