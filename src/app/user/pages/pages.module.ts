import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './data/data.component';
import { UploadComponent } from './upload/upload.component';
import { CmpsModule } from 'src/app/cmps/cmps.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDirective } from 'src/app/dragDrop.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    DataComponent,
    UploadComponent,
    DragDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CmpsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
