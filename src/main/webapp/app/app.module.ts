import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PlateauSharedModule } from 'app/shared/shared.module';
import { PlateauCoreModule } from 'app/core/core.module';
import { PlateauAppRoutingModule } from './app-routing.module';
import { PlateauHomeModule } from './home/home.module';
import { PlateauEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PlateauSharedModule,
    PlateauCoreModule,
    PlateauHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PlateauEntityModule,
    PlateauAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class PlateauAppModule {}
