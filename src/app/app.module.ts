import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRatingComponent } from './component/edit-rating/edit-rating.component';
import { LoginComponent } from './component/login/login.component';
import { ViewRatingComponent } from './component/view-rating/view-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/Module/material.module';
import { RegistrationComponent } from './component/registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultipleSearchComponent } from './common/component/multiple-search/multiple-search.component';
import { FilterAreasPipe } from './common/pipes/filter-areas.pipe';
import { FilterEstablishmentsPipe } from './common/pipes/filter-establishments.pipe';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CardViewComponent } from './common/component/card-view/card-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ViewRatingComponent,
    EditRatingComponent,
    LoginComponent,
    RegistrationComponent,
    MultipleSearchComponent,
    FilterAreasPipe,
    FilterEstablishmentsPipe,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
