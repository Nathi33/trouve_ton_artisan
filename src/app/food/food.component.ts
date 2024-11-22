import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  data: Artisans[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Alimentation')
      .subscribe((response) => {
        this.data = response;
      });
  }
  selectedArtisans: any = null;

  selectArtisans(artisans: any): void {
    this.selectArtisans = artisans;
  }
}
