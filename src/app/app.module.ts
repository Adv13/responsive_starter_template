import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { AsideComponent } from './aside/aside.component';
import { AsideContainerComponent } from './aside-container/aside-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NavBarComponent,
    MainComponent,
    ArticleComponent,
    AsideComponent,
    AsideContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
