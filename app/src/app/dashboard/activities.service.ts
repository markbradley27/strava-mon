import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// TODO: Think about moving this out of server.
import { DetailedActivity } from '../../../../server/src/strava-client/model/detailedActivity';
import { ActivityType } from '../../../../server/src/strava-client/model/activityType';

export interface ActivityRow {
  activity: DetailedActivity;
}

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor(private http: HttpClient) {}

  getActivityTypes() {
    return this.http
      .get<{ type: ActivityType }[]>('/postgrest/activity_types')
      .pipe(map((rows) => rows.map((row) => row.type)));
  }

  getActivities(options?: { types?: ActivityType[] }) {
    let params = new HttpParams();

    if (options?.types !== undefined && options.types.length > 0) {
      params = params.set(
        'activity->>type',
        `in.(${options.types.map((type) => `${type}`).join(',')})`
      );
    }

    return this.http
      .get<ActivityRow[]>('/postgrest/activities', { params: params })
      .pipe(map((rows) => rows.map((row) => row.activity)));
  }
}
