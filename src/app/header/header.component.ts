import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';
import { SearchService } from '../search.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  data: Artisans[] = []; //Tous les artisans
  filteredData: Artisans[] = []; // Artisans filtrés
  searchText: string = ''; // Texte de recherche
  isSearchFocused: boolean = false; // Contrôle la visibilité de la liste
  artisanSelected: boolean = false; // Indique si un artisan a été sélectionné

  constructor(
    private dataCraftsmanService: DataCraftsmanService,
    private router: Router,
    private searchService: SearchService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Réinitialise les données et le texte de recherche après chaque navigation
        this.resetSearch();
      });
  }

  ngOnInit(): void {
    // Récupération des données des artisans
    this.dataCraftsmanService.getData().subscribe((artisans) => {
      this.data = artisans;
    });

    // Abonnement au service de recherche
    this.searchService.searchTerm$.subscribe((term) => {
      this.searchText = term;
      this.filterArtisans();
    });
  }

  private resetSearch(): void {
    this.searchService.setSearchTerm('');
    this.filteredData = [];
    this.searchText = '';
    this.isSearchFocused = false;
    this.artisanSelected = false;
  }

  filterArtisans(): void {
    const lowerSearch = this.searchText.trim().toLowerCase();
    if (lowerSearch) {
      this.filteredData = this.data.filter((artisan) => {
        //Retourne true si au moins un champ correspond
        return (
          artisan.name?.toLowerCase().includes(lowerSearch) ||
          artisan.specialty?.toLowerCase().includes(lowerSearch) ||
          artisan.location?.toLowerCase().includes(lowerSearch)
        );
      });
    } else {
      this.filteredData = [];
    }
  }

  // Méthode pour gérer le focus sur l'input
  onSearchFocus(): void {
    this.isSearchFocused = true; // On affiche la liste
    this.filterArtisans(); // On filtre les artisans
  }

  // Méthode pour gérer le clic sur la barre de recherche
  onSearchClick(event: MouseEvent): void {
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter de fermer la liste
    if (!this.isSearchFocused) {
      // Si la liste est déjà affichée
      this.isSearchFocused = true; // Affiche la liste
      this.filterArtisans(); // Filtre les artisans
    }
    this.artisanSelected = false; // Réinitialise le statut de sélection
  }

  // Méthode pour gérer le blur sur l'input
  onSearchBlur(): void {
    setTimeout(() => {
      this.isSearchFocused = false; // Cacher la liste
    }, 200);
  }

  // Méthode pour sélectionner un artisan
  selectArtisan(artisan: Artisans): void {
    this.searchText = artisan.name; // Remplace le texte dans la barre de recherche
    this.isSearchFocused = false; // Ferme la liste
    this.artisanSelected = true; // Indique qu'un artisan a été sélectionné
  }

  // Redirection vers la page de l'artisan sélectionné
  searchArtisan(): void {
    const artisan = this.data.find(
      (a) => a.name.toLowerCase() === this.searchText.trim().toLowerCase()
    );

    if (artisan) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/card', artisan.id]); // Redirige vers la page de l'artisan
        this.resetSearch(); // Réinitialise le texte de recherche
      });
    } else {
      alert('Aucun artisan correspondant trouvé.');
    }
  }

  // Cacher la liste si l'utilisateur clique en dehors de la barre de recherche ou de la liste
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const searchInput = document.getElementById('search-input');
    const listGroup = document.querySelector('.list-group');

    // Si le clic est en dehors de l'élément de recherche ou de la liste, cacher la liste
    if (
      searchInput &&
      !searchInput.contains(event.target as Node) &&
      listGroup &&
      !listGroup.contains(event.target as Node)
    ) {
      this.isSearchFocused = false; // Cacher la liste
      if (!this.artisanSelected) {
        // Si aucun artisan n'a été sélectionné
        this.resetSearch(); // Réinitialise le texte de recherche
      }
      this.artisanSelected = false; // Réinitialise le statut de sélection
    }
  }
}
