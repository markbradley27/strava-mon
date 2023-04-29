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

/**
* An enumeration of the types an activity may have. Note that this enumeration does not include new sport types (e.g. MountainBikeRide, EMountainBikeRide), activities with these sport types will have the corresponding activity type (e.g. Ride for MountainBikeRide, EBikeRide for EMountainBikeRide)
*/
export enum ActivityType {
    AlpineSki = <any> 'AlpineSki',
    BackcountrySki = <any> 'BackcountrySki',
    Canoeing = <any> 'Canoeing',
    Crossfit = <any> 'Crossfit',
    EBikeRide = <any> 'EBikeRide',
    Elliptical = <any> 'Elliptical',
    Golf = <any> 'Golf',
    Handcycle = <any> 'Handcycle',
    Hike = <any> 'Hike',
    IceSkate = <any> 'IceSkate',
    InlineSkate = <any> 'InlineSkate',
    Kayaking = <any> 'Kayaking',
    Kitesurf = <any> 'Kitesurf',
    NordicSki = <any> 'NordicSki',
    Ride = <any> 'Ride',
    RockClimbing = <any> 'RockClimbing',
    RollerSki = <any> 'RollerSki',
    Rowing = <any> 'Rowing',
    Run = <any> 'Run',
    Sail = <any> 'Sail',
    Skateboard = <any> 'Skateboard',
    Snowboard = <any> 'Snowboard',
    Snowshoe = <any> 'Snowshoe',
    Soccer = <any> 'Soccer',
    StairStepper = <any> 'StairStepper',
    StandUpPaddling = <any> 'StandUpPaddling',
    Surfing = <any> 'Surfing',
    Swim = <any> 'Swim',
    Velomobile = <any> 'Velomobile',
    VirtualRide = <any> 'VirtualRide',
    VirtualRun = <any> 'VirtualRun',
    Walk = <any> 'Walk',
    WeightTraining = <any> 'WeightTraining',
    Wheelchair = <any> 'Wheelchair',
    Windsurf = <any> 'Windsurf',
    Workout = <any> 'Workout',
    Yoga = <any> 'Yoga'
}
