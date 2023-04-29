import asyncHandler from "express-async-handler";
import express from "express";
import DataLayer from "../data_layer";
import OauthLayer from "../oauth_client";
import StravaLayer from "../strava_layer";

export default function auth_handlers(
  dl: DataLayer,
  oa: OauthLayer,
  sl: StravaLayer
) {
  const router = express.Router();

  router.get("/authorize", (_req: express.Request, res: express.Response) => {
    res.redirect(
      oa.authorizeURL({
        redirect_uri: process.env.STRAVA_REDIRECT_URI,
        scope: "activity:read_all",
      })
    );
  });

  router.get(
    "/authorize_callback",
    asyncHandler(async (req: express.Request, res: express.Response) => {
      try {
        const token = await oa.getToken({
          code: req.query.code as string,
          redirect_uri: "",
        });
        await dl.insertUser(token);
        void sl.loadAllActivities();
        res.sendStatus(200);
      } catch (error: unknown) {
        console.log(`authorize_callback error: ${(error as Error).message}`);
        res.sendStatus(500);
      }
    })
  );

  router.get(
    "/deauthorize",
    asyncHandler(async (_req: express.Request, res: express.Response) => {
      await oa.revokeToken();
      await dl.deleteUser();
      await dl.deleteActivities();
      res.sendStatus(200);
    })
  );

  return router;
}
