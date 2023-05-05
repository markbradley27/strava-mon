import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// TODO: Think about moving this out of server.
import { DetailedActivity } from '../../../../server/src/strava-client/model/detailedActivity';

export interface ActivityRow {
  activity: DetailedActivity
}

@Injectable({
  providedIn: "root"
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get<ActivityRow[]>("/activities").pipe(map((rows) => rows.map((row) => row.activity)));
  }
}
