import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss',
})
export class BuildingComponent implements OnInit {
  data: Artisans[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Bâtiment')
      .subscribe((response) => {
        this.data = response;
      });
  }
  selectedArtisans: any = null;

  selectArtisans(artisans: any): void {
    this.selectArtisans = artisans;
  }
}
