import {
  ActivityCreateData,
  ActivityDeleteData,
  ActivityUpdateData,
  StravaHandlers,
} from "express-strava";
import StravaLayer from "../strava_layer";
import DataLayer from "../data_layer";

export default function webhook_handlers(dl: DataLayer, sl: StravaLayer) {
  function activity_create_handler(data: ActivityCreateData) {
    void sl.loadActivity(data.object_id);
  }

  function activity_update_handler(data: ActivityUpdateData) {
    void sl.reloadActivity(data.object_id);
  }

  function activity_delete_handler(data: ActivityDeleteData) {
    void dl.deleteActivity(data.object_id);
  }

  return StravaHandlers({
    verify_token: process.env.STRAVA_WEBHOOK_VERIFY_TOKEN ?? "",
    activity_create_handler: activity_create_handler,
    activity_update_handler: activity_update_handler,
    activity_delete_handler: activity_delete_handler,
    logger: console.log,
  });
}
