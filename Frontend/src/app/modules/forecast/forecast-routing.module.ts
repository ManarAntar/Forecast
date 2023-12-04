import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForecastListComponent } from "./forecast-list/forecast-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "forecast" },
  { path: 'forecast', component: ForecastListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule { }
