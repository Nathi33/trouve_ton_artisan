import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artisans } from '../app/models/artisans.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataCraftsmanService {
  // Import de l'URL du fichier JSON
  private dataUrl = '../assets/data/datas.json';

  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  // Méthode permettant de récupérer les données du fichier JSON
  getData(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl);
  }

  //Filtre les artisans par catégorie
  getByCategory(category: string): Observable<Artisans[]> {
    return this.http
      .get<Artisans[]>(this.dataUrl)
      .pipe(
        map((response) =>
          response.filter((artisan: Artisans) => artisan.category === category)
        )
      );
  }

  //Récupère un artisan par son ID
  getArtisansById(id: string): Observable<Artisans | undefined> {
    return this.getData().pipe(
      map((artisans) => {
        const artisan = artisans.find((artisan) => artisan.id === id);
        return artisan;
      })
    );
  }
}
