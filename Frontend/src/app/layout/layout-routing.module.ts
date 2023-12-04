import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WildCardComponent } from "../components/wild-card/wild-card.component";
import { ForecastModule } from "../modules/forecast/forecast.module";
import { LayoutComponent } from "./layout/layout.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => ForecastModule,
      },

    ],
  },
  {
    path: "**",
    component: WildCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
