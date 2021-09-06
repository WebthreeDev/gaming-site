import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  public exportPdf(): void {
    window.open(`${environment.LitePapers}litepaper.pdf`, '_blank');
  }
}
