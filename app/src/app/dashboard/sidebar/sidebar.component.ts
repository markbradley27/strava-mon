import { Component } from '@angular/core';
import { ActivityType } from '../../../../../server/src/strava-client/model/activityType';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activityTypes: ActivityType[] = [];

  constructor(private activitiesService: ActivitiesService) { }

  getActivityTypes() {
    this.activitiesService.getActivityTypes().subscribe((activityTypes) => {
      this.activityTypes = activityTypes;
    });
  }

  ngOnInit() {
    this.getActivityTypes();
  }
}
