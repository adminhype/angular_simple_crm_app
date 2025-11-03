import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MATERIAL_IMPORTS } from './shared/materials';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, MATERIAL_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('simple_crm');
}
