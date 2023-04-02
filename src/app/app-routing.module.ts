import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsDisplayComponent } from './cats-display/cats-display.component';

const routes: Routes = [{ path: '', component: CatsDisplayComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
