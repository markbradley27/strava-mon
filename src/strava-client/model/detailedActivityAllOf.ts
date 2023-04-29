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
import { DetailedSegmentEffort } from './detailedSegmentEffort';
import { Lap } from './lap';
import { PhotosSummary } from './photosSummary';
import { Split } from './split';
import { SummaryGear } from './summaryGear';

export class DetailedActivityAllOf {
    /**
    * The description of the activity
    */
    'description'?: string;
    'photos'?: PhotosSummary;
    'gear'?: SummaryGear;
    /**
    * The number of kilocalories consumed during this activity
    */
    'calories'?: number;
    'segmentEfforts'?: Array<DetailedSegmentEffort>;
    /**
    * The name of the device used to record the activity
    */
    'deviceName'?: string;
    /**
    * The token used to embed a Strava activity
    */
    'embedToken'?: string;
    /**
    * The splits of this activity in metric units (for runs)
    */
    'splitsMetric'?: Array<Split>;
    /**
    * The splits of this activity in imperial units (for runs)
    */
    'splitsStandard'?: Array<Split>;
    'laps'?: Array<Lap>;
    'bestEfforts'?: Array<DetailedSegmentEffort>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "photos",
            "baseName": "photos",
            "type": "PhotosSummary"
        },
        {
            "name": "gear",
            "baseName": "gear",
            "type": "SummaryGear"
        },
        {
            "name": "calories",
            "baseName": "calories",
            "type": "number"
        },
        {
            "name": "segmentEfforts",
            "baseName": "segment_efforts",
            "type": "Array<DetailedSegmentEffort>"
        },
        {
            "name": "deviceName",
            "baseName": "device_name",
            "type": "string"
        },
        {
            "name": "embedToken",
            "baseName": "embed_token",
            "type": "string"
        },
        {
            "name": "splitsMetric",
            "baseName": "splits_metric",
            "type": "Array<Split>"
        },
        {
            "name": "splitsStandard",
            "baseName": "splits_standard",
            "type": "Array<Split>"
        },
        {
            "name": "laps",
            "baseName": "laps",
            "type": "Array<Lap>"
        },
        {
            "name": "bestEfforts",
            "baseName": "best_efforts",
            "type": "Array<DetailedSegmentEffort>"
        }    ];

    static getAttributeTypeMap() {
        return DetailedActivityAllOf.attributeTypeMap;
    }
}

