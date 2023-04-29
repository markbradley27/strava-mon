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

export class ClubAthlete {
    /**
    * Resource state, indicates level of detail. Possible values: 1 -> \"meta\", 2 -> \"summary\", 3 -> \"detail\"
    */
    'resourceState'?: number;
    /**
    * The athlete\'s first name.
    */
    'firstname'?: string;
    /**
    * The athlete\'s last initial.
    */
    'lastname'?: string;
    /**
    * The athlete\'s member status.
    */
    'member'?: string;
    /**
    * Whether the athlete is a club admin.
    */
    'admin'?: boolean;
    /**
    * Whether the athlete is club owner.
    */
    'owner'?: boolean;

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
            "name": "member",
            "baseName": "member",
            "type": "string"
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ClubAthlete.attributeTypeMap;
    }
}

