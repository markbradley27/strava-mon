import { Component } from '@angular/core';
import { DetailedActivity } from '../../../../../server/src/strava-client/model/detailedActivity';
import { ActivityType } from '../../../../../server/src/strava-client/model/models';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  activityTypesFilter: ActivityType[] = [];
  activities: DetailedActivity[] = []

  constructor(private activitiesService: ActivitiesService) { }

  getActivities() {
    this.activitiesService.getActivities({ types: this.activityTypesFilter }).subscribe((activities) => {
      this.activities = activities;
    });
  }

  updateActivityTypesFilter(newTypes: ActivityType[]) {
    this.activityTypesFilter = newTypes;
    this.getActivities();
  }

  ngOnInit() {
    this.getActivities();
  }
}
