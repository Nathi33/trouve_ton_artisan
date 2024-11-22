import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingComponent implements OnInit {
  data: Artisans[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Fabrication')
      .subscribe((response) => {
        this.data = response;
      });
  }
  selectedArtisans: any = null;

  selectArtisans(artisans: any): void {
    this.selectArtisans = artisans;
  }
}
