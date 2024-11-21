import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
})
export class StarRatingPipe implements PipeTransform {
  transform(note: number): string[] {
    // Détermination du nombre d'étoiles pleines, vides et à moitié
    const fullStars = Math.floor(note); // Permet de déterminer le nombre d'étoiles pleines
    const halfStar = note % 1 !== 0; // Si la note n'est pas entière alors cette variable passe à 'true' et on ajoute une demi-étoile
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Les étolies vides complètes la note jusqu'à 5 et son nombre ser a déduit si présence d'une demi-étoile
    //Création du tableau d'étoiles
    return [
      ...Array(fullStars).fill('full'),
      ...(halfStar ? ['half'] : []),
      ...Array(emptyStars).fill('empty'),
    ];
  }
}
