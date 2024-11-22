import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent implements OnInit {
  data: Artisans[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Services')
      .subscribe((response) => {
        this.data = response;
      });
  }
  selectedArtisans: any = null;

  selectArtisans(artisans: any): void {
    this.selectArtisans = artisans;
  }
}
