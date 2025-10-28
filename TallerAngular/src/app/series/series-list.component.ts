// src/app/series/series-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.component.html',
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons = 0;

  constructor(private svc: SeriesService) {}

  ngOnInit(): void {
    this.svc.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons =
        data.reduce((sum, s) => sum + s.seasons, 0) / data.length;
    });
  }
}
