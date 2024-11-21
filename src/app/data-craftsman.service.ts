import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artisans } from '../app/models/artisans.model';

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
}
