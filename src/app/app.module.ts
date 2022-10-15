import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SavedPostComponent } from './components/saved-post/saved-post.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    SidebarComponent,
    HomeComponent,
    MessagesComponent,
    ProfileComponent,
    SavedPostComponent,
    SettingsComponent,
    NotfoundComponent,
    SideMenuComponent,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
