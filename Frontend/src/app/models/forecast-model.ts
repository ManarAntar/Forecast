export interface ForecastByCityModel {
    id: number;
    city: string;
    forecast: ForecastDetailModel[];
}
export interface ForecastByDateModel {
    id: number;
    city: string;
    forecast: ForecastDetailModel;
}
export interface ForecastDetailModel {
    date: string;
    temperatureCelsius: number,
    temperatureFahrenheit: number,
    humidity: number
}
 export interface CityModel{
    id: number;
    city: string;
 }


