import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { BuildingComponent } from './building/building.component';
import { CardComponent } from './card/card.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FoodComponent } from './food/food.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ServicesPageComponent } from './services-page/services-page.component';

import { HttpClientModule } from '@angular/common/http';
import { StarRatingPipe } from './star-rating.pipe';
import { CraftsmanCardTypeComponent } from './craftsman-card-type/craftsman-card-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityComponent,
    BuildingComponent,
    CardComponent,
    CookiesComponent,
    FoodComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LegalNoticesComponent,
    ManufacturingComponent,
    NotFoundComponent,
    PersonalDataComponent,
    ServicesPageComponent,
    StarRatingPipe,
    CraftsmanCardTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
