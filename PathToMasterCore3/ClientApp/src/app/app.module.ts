import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CharPerMonthComponent } from './charts/per-month/chart.component';
import { CharPerFilialComponent } from './charts/per-filial/per-filial-chart.component';
import { CharPopularAnalyzesComponent } from './charts/popular-analyzes/popular-analyzes-chart.component';
import { CharPerAnalyzesComponent } from './charts/per-analyz/per-analyz-chart.component';
import { CharIncomePerAnalyzComponent } from './charts/income-per-analyz/income-per-analyz-chart.component';
import { StructureTestsTypesChartAnalyzComponent } from './charts/structure-tests-by-types/structure-tests-by-types-chart.component';
import { ForecastAnalyzComponent } from './charts/forecast/forecast-chart.component';
import { ImportFileComponent } from './import-file/import-file.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CharPerMonthComponent,
    CharPerFilialComponent,
    CharPopularAnalyzesComponent,
    CharPerAnalyzesComponent,
    CharIncomePerAnalyzComponent,
    StructureTestsTypesChartAnalyzComponent,
    ForecastAnalyzComponent,
    ImportFileComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'charts-per-month', component: CharPerMonthComponent },
      { path: 'charts-per-filial', component: CharPerFilialComponent },
      { path: 'popular-analyzes-chart', component: CharPopularAnalyzesComponent },
      { path: 'per-analyzes-chart', component: CharPerAnalyzesComponent },
      { path: 'income-per-analyz', component: CharIncomePerAnalyzComponent },
      { path: 'structure-tests-by-types', component: StructureTestsTypesChartAnalyzComponent },
      { path: 'forecast-chart', component: ForecastAnalyzComponent },
      { path: 'import-file', component: ImportFileComponent },
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
