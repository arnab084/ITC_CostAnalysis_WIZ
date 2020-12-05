import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UploadFileComponent} from "./dashboard/upload-file/upload-file.component";
import {DashboardNewComponent} from "./dashboard-new/dashboard-new.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardnew', component: DashboardNewComponent },
  { path: 'upload', component: UploadFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
