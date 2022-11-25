import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './data/data.component';
import { UploadComponent } from './upload/upload.component';
import { CmpsModule } from 'src/app/cmps/cmps.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DataComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CmpsModule
  ]
})
export class PagesModule { }
