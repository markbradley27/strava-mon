import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DetailedActivity } from '../../../../../server/src/strava-client/model/detailedActivity';

@Component({
  selector: 'dashboard-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  @Input() activities: DetailedActivity[] = [];

  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = { lat: 37.6, lng: -95.665 }
  zoom = 5
  polylineOptions: google.maps.PolylineOptions = {
    strokeColor: "#EA3322"
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${environment.googleMapsApiKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  getActivityPolyline(activity: DetailedActivity) {
    if (activity.map?.polyline === undefined) {
      return [];
    }
    return google.maps.geometry.encoding.decodePath(activity.map.polyline);
  }
}
