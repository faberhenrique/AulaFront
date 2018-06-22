import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule, MatListModule } from '@angular/material';
import { NavegationComponent } from './navegation/navegation.component';
import { TableComponent } from './table/table.component';
import { Q2Component } from './q2/q2.component';
import { RespAreaComponent } from './resp-area/resp-area.component';
import { Q3Component } from './q3/q3.component';





const routes: Routes = [
  { path: 'q2', component: Q2Component },
  { path: 'q1', component: TableComponent },
  { path: 'q3', component: Q3Component }

];
@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    TableComponent,
    Q2Component,
    RespAreaComponent,
    Q3Component,
    

  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),MatMenuModule, 
    BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,MatButtonModule, LayoutModule, MatIconModule, MatListModule, 
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { 
  
}
