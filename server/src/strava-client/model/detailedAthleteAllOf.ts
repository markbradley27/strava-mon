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
import { SummaryClub } from './summaryClub';
import { SummaryGear } from './summaryGear';

export class DetailedAthleteAllOf {
    /**
    * The athlete\'s follower count.
    */
    'followerCount'?: number;
    /**
    * The athlete\'s friend count.
    */
    'friendCount'?: number;
    /**
    * The athlete\'s preferred unit system.
    */
    'measurementPreference'?: DetailedAthleteAllOf.MeasurementPreferenceEnum;
    /**
    * The athlete\'s FTP (Functional Threshold Power).
    */
    'ftp'?: number;
    /**
    * The athlete\'s weight.
    */
    'weight'?: number;
    /**
    * The athlete\'s clubs.
    */
    'clubs'?: Array<SummaryClub>;
    /**
    * The athlete\'s bikes.
    */
    'bikes'?: Array<SummaryGear>;
    /**
    * The athlete\'s shoes.
    */
    'shoes'?: Array<SummaryGear>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "followerCount",
            "baseName": "follower_count",
            "type": "number"
        },
        {
            "name": "friendCount",
            "baseName": "friend_count",
            "type": "number"
        },
        {
            "name": "measurementPreference",
            "baseName": "measurement_preference",
            "type": "DetailedAthleteAllOf.MeasurementPreferenceEnum"
        },
        {
            "name": "ftp",
            "baseName": "ftp",
            "type": "number"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        },
        {
            "name": "clubs",
            "baseName": "clubs",
            "type": "Array<SummaryClub>"
        },
        {
            "name": "bikes",
            "baseName": "bikes",
            "type": "Array<SummaryGear>"
        },
        {
            "name": "shoes",
            "baseName": "shoes",
            "type": "Array<SummaryGear>"
        }    ];

    static getAttributeTypeMap() {
        return DetailedAthleteAllOf.attributeTypeMap;
    }
}

export namespace DetailedAthleteAllOf {
    export enum MeasurementPreferenceEnum {
        Feet = <any> 'feet',
        Meters = <any> 'meters'
    }
}
