import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumBodyComponent } from './album-body/album-body.component';
import { AuthComponent } from './auth/auth.component';
import { BrowseBodyComponent } from './browse-body/browse-body.component';
import { ListenNowBodyComponent } from './listen-now-body/listen-now-body.component';
import { PlaylistBodyComponent } from './playlist-body/playlist-body.component';
import { RadioBodyComponent } from './radio-body/radio-body.component';

const routes: Routes = [
  { path: 'album', component: AlbumBodyComponent },
  { path: 'browse', component: BrowseBodyComponent},
  { path: 'listen-now', component: ListenNowBodyComponent},
  { path: 'playlist', component: PlaylistBodyComponent},
  { path: 'radio', component: RadioBodyComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/listen-now', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
