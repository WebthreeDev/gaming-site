import { Component, OnInit } from '@angular/core';
import { Roadmap } from 'src/app/interfaces/roadmap.interface';
import { RoadmapData } from 'src/app/models/roadmap.model';
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  public roadmap: Roadmap[] = RoadmapData;
  constructor() { }

  ngOnInit(): void {
  }

}
