import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RootComponent } from './root/root.component';
import { MapComponent } from './map/map.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SidebarComponent,
    RootComponent,
    MapComponent,
    GoogleMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [RootComponent],
})
export class DashboardModule {}
