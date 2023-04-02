import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsDisplayComponent } from './cats-display/cats-display.component';
import { FavouriteCatsDisplayComponent } from './favourite-cats-display/favourite-cats-display.component';

const routes: Routes = [
  { path: '', component: CatsDisplayComponent },
  { path: 'favourites', component: FavouriteCatsDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
