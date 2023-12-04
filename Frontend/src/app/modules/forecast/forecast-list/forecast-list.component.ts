import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CityModel, ForecastByCityModel, ForecastByDateModel } from 'src/app/models/forecast-model';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  constructor(private forecastService: ForecastService, public datePipe: DatePipe) { }

  ForecastList!: ForecastByDateModel[];
  ForecastByCity!: ForecastByCityModel;
  allCities!: CityModel[];
  currentDate: string = '2023-11-27';
  selectedCity!: string;
  filterForm!: FormGroup;
  tempUnit: string = 'C';
  checkResp: boolean = true;
  isLoading: boolean = false;
  isFilter: boolean = false;
  isError!:string;
  ngOnInit() {
    this.getLatestForecast();
    this.initiateForm();
  }

  initiateForm() {
    this.filterForm = new FormGroup({
      city: new FormControl(""),
      date: new FormControl(""),
    });
  }
  onFilter() {
    this.isFilter = !this.isFilter;
  }
  clearForm() {
    this.filterForm.controls['city'].setValue('');
    this.filterForm.controls['date'].setValue('');
    this.currentDate = '2023-11-27';
    this.selectedCity = '';
    this.getLatestForecast();
  }
  onSubmitForm() {
    const params = {
      cityId: this.filterForm.value.city,
      date: this.filterForm.value.date ? this.datePipe.transform(this.filterForm.value.date, 'yyyy-MM-dd') : this.filterForm.value.date
    }
    this.getCustomForecast(params);
  }

  getLatestForecast() {
    this.isLoading = true;
    this.isError='';
    this.forecastService.getLatestForecast().subscribe(
      (resp: any) => {
        this.isLoading = false;
        this.checkResp = true;
        this.ForecastList = resp;
        this.getCities();
      },
      (error)=>{
        this.isLoading=false;
        this.isError=error.error.errorMessage;
      }
    );
  }

  getCities() {
    this.allCities = [];
    this.ForecastList.forEach(element => {
      this.allCities.push({
        id: element.id,
        city: element.city
      })
    });
  }

  getCustomForecast(params: any) { //get forecast with filters (date,city)
    this.isLoading = true;
    this.forecastService.getForecastByFilter(params).subscribe(
      (resp) => {
        this.isError='';
        this.isLoading = false;
        if (resp) {
          (resp.id) ? this.checkResp = false : this.checkResp = true;
          (params.date) ? this.currentDate = params.date : this.currentDate = '';
          if (params.cityId) {
            this.allCities.forEach(element => {
              if (element.id == params.cityId) this.selectedCity = element.city
              this.ForecastByCity = resp;
            });
          }
          this.ForecastList = resp;
        }
      },
      (error)=>{
        
        this.isLoading=false;
        this.isError=error.error.errorMessage;
      }
    );
  }

  toggleTemp(unit: string) {
    this.tempUnit = unit;
  }
}
