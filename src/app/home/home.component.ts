import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

// OnInit est une interface qui définit une méthode 'ngOnInit' qui est appelée lors de l'initialisation d'un composant
export class HomeComponent implements OnInit {
  // Déclaration d'une variable data qui est un tableau pouvant stocker des éléments de n'importe quel type
  // Cette variable stockera les données récupérées par le service DataCraftsmanService
  data: Artisans[] = [];

  // Injection du service DataCraftsmanService
  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Appel de la méthode getData du service DataCraftsmanService
    this.dataCraftsmanService.getData().subscribe((data) => {
      this.data = data.filter((artisan) => artisan.top);
    });
  }
}
