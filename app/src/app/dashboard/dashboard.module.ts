import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RootComponent } from './root/root.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    SidebarComponent,
    RootComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootComponent
  ]
})
export class DashboardModule { }
