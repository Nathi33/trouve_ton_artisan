import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Artisans } from '../app/models/artisans.model';
import { map, catchError } from 'rxjs/operators';

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
    return this.http
      .get<Artisans[]>(this.dataUrl)
      .pipe(catchError(this.handleError));
  }

  //Filtre les artisans par catégorie
  getByCategory(category: string): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl).pipe(
      map((response) =>
        response.filter((artisan: Artisans) => artisan.category === category)
      ),
      catchError(this.handleError)
    );
  }

  //Récupère un artisan par son ID
  getArtisansById(id: string): Observable<Artisans | undefined> {
    return this.getData().pipe(
      map((artisans) => artisans.find((artisan) => artisan.id === id)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erreur inconnue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Erreur : ${error.status}, message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
