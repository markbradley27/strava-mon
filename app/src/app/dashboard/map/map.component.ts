import { Component, Input } from '@angular/core';
import { DetailedActivity } from '../../../../../server/src/strava-client/model/models';

@Component({
  selector: 'dashboard-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() activities: DetailedActivity[] = [];
}
