import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';
import { Artisans } from '../models/artisans.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  artisan: Artisans | undefined;
  formulaire: FormGroup;
  messageEnvoye: boolean = false;
  submitted: boolean = false;

  constructor(
    private dataCraftsmanService: DataCraftsmanService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Création du formulaire
    this.formulaire = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  ngOnInit(): void {
    // Récupération de l'ID de l'artisan
    const id = String(this.route.snapshot.paramMap.get('id'));
    //Récupère l'artisan correspondant à l'ID
    this.dataCraftsmanService.getArtisansById(id).subscribe((response) => {
      this.artisan = response;
    });
  }

  // Méthode de soumission du formulaire
  onSubmit(): void {
    this.submitted = true;
    if (this.formulaire.valid) {
      this.messageEnvoye = true;

      // Réinitialisation du formulaire après un délaie de 3 secondes
      setTimeout(() => {
        this.formulaire.reset();
        this.submitted = false;
        this.messageEnvoye = false;
      }, 5000);
    }
  }

  // Méthode pour faciliter l'affichage des erreurs
  get f() {
    return this.formulaire.controls;
  }
}
{
}
