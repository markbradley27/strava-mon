import { Component } from '@angular/core';
import { DetailedActivity } from '../../../../../server/src/strava-client/model/detailedActivity';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  activities: DetailedActivity[] = []

  constructor(private activitiesService: ActivitiesService) { }

  getActivities() {
    this.activitiesService.getActivities().subscribe((activities) => {
      this.activities = activities;
    });
  }

  ngOnInit() {
    this.getActivities();
  }
}
