import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
// import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    // LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    DatePipe
  ]

})
export class SharedModule { }
