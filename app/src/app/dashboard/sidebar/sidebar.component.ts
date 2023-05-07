import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivityType } from '../../../../../server/src/strava-client/model/activityType';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activityTypes: ActivityType[] = [];

  // TODO: I'm declaring this empty array just to define the type of the
  // ngModel, there's got to be a better way...
  _selectedActivityTypes: ActivityType[] = [];
  @Output() selectedActivityTypes = new EventEmitter<ActivityType[]>();

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
