import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlateauSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [PlateauSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class PlateauHomeModule {}
