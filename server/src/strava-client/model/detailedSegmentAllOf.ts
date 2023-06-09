/**
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PolylineMap } from './polylineMap';

export class DetailedSegmentAllOf {
    /**
    * The time at which the segment was created.
    */
    'createdAt'?: Date;
    /**
    * The time at which the segment was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The segment\'s total elevation gain.
    */
    'totalElevationGain'?: number;
    'map'?: PolylineMap;
    /**
    * The total number of efforts for this segment
    */
    'effortCount'?: number;
    /**
    * The number of unique athletes who have an effort for this segment
    */
    'athleteCount'?: number;
    /**
    * Whether this segment is considered hazardous
    */
    'hazardous'?: boolean;
    /**
    * The number of stars for this segment
    */
    'starCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "totalElevationGain",
            "baseName": "total_elevation_gain",
            "type": "number"
        },
        {
            "name": "map",
            "baseName": "map",
            "type": "PolylineMap"
        },
        {
            "name": "effortCount",
            "baseName": "effort_count",
            "type": "number"
        },
        {
            "name": "athleteCount",
            "baseName": "athlete_count",
            "type": "number"
        },
        {
            "name": "hazardous",
            "baseName": "hazardous",
            "type": "boolean"
        },
        {
            "name": "starCount",
            "baseName": "star_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DetailedSegmentAllOf.attributeTypeMap;
    }
}

