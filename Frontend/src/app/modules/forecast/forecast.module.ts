import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastRoutingModule } from './forecast-routing.module';

@NgModule({
  declarations: [
    ForecastListComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class ForecastModule { }
