import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeriesListComponent } from "./series/series-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SeriesListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TallerAngular');
}
