import { Component, Input } from '@angular/core';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-craftsman-card-type',
  templateUrl: './craftsman-card-type.component.html',
  styleUrl: './craftsman-card-type.component.scss',
})
export class CraftsmanCardTypeComponent {
  @Input() artisan!: Artisans;
  @Input() index!: number;
}
