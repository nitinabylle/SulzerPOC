import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'section', component:SectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
