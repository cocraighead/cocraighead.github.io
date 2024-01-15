import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
// import { AddSongComponent } from './components/add-song/add-song.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path: 'add', component: AddSongComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
