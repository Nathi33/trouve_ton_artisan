import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { BuildingComponent } from './building/building.component';
import { CardComponent } from './card/card.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'building', component: BuildingComponent },
  { path: 'card', component: CardComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'food', component: FoodComponent },
  { path: '', component: HomeComponent },
  { path: 'legal-notices', component: LegalNoticesComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
