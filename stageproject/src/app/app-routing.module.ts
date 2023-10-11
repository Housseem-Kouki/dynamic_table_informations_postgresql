import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstoneComponent } from './firstone/firstone.component';
import { SecondoneComponent } from './secondone/secondone.component';

const routes: Routes = [
  { path: '',          component: FirstoneComponent },
  { path: 'secondone',          component: SecondoneComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
