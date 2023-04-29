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

export class SummaryAthleteAllOf {
    /**
    * Resource state, indicates level of detail. Possible values: 1 -> \"meta\", 2 -> \"summary\", 3 -> \"detail\"
    */
    'resourceState'?: number;
    /**
    * The athlete\'s first name.
    */
    'firstname'?: string;
    /**
    * The athlete\'s last name.
    */
    'lastname'?: string;
    /**
    * URL to a 62x62 pixel profile picture.
    */
    'profileMedium'?: string;
    /**
    * URL to a 124x124 pixel profile picture.
    */
    'profile'?: string;
    /**
    * The athlete\'s city.
    */
    'city'?: string;
    /**
    * The athlete\'s state or geographical region.
    */
    'state'?: string;
    /**
    * The athlete\'s country.
    */
    'country'?: string;
    /**
    * The athlete\'s sex.
    */
    'sex'?: SummaryAthleteAllOf.SexEnum;
    /**
    * Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription.
    */
    'premium'?: boolean;
    /**
    * Whether the athlete has any Summit subscription.
    */
    'summit'?: boolean;
    /**
    * The time at which the athlete was created.
    */
    'createdAt'?: Date;
    /**
    * The time at which the athlete was last updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceState",
            "baseName": "resource_state",
            "type": "number"
        },
        {
            "name": "firstname",
            "baseName": "firstname",
            "type": "string"
        },
        {
            "name": "lastname",
            "baseName": "lastname",
            "type": "string"
        },
        {
            "name": "profileMedium",
            "baseName": "profile_medium",
            "type": "string"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "sex",
            "baseName": "sex",
            "type": "SummaryAthleteAllOf.SexEnum"
        },
        {
            "name": "premium",
            "baseName": "premium",
            "type": "boolean"
        },
        {
            "name": "summit",
            "baseName": "summit",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SummaryAthleteAllOf.attributeTypeMap;
    }
}

export namespace SummaryAthleteAllOf {
    export enum SexEnum {
        M = <any> 'M',
        F = <any> 'F'
    }
}
