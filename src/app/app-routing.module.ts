import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnectionComponent} from "./connection/connection.component";
import {CardListComponent} from "./card-list/card-list.component";
import {NewCardComponent} from "./new-card/new-card.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'inscription', component: InscriptionComponent,
  },
  {
    path: 'connection', component: ConnectionComponent,
  },
  {
    path: 'cards', component: CardListComponent,
  },
  {
    path: 'newcard', component: NewCardComponent,
  },
  {
    path: 'detail', component: CardDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
