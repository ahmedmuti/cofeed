import { NotfoundComponent } from './components/notfound/notfound.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SavedPostComponent } from './components/saved-post/saved-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'saved-post', component: SavedPostComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
