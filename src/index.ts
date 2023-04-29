import express from "express";
import dotenv from "dotenv";
import StravaLayer from "./strava_layer";
import DataLayer from "./data_layer";
import webhook_handlers from "./handlers/webhook_handlers";
import auth_handlers from "./handlers/auth_handlers";
import OauthLayer from "./oauth_client";

dotenv.config();

const app = express();
app.use(express.json());

const dl = new DataLayer();
const oa = new OauthLayer(dl);
const sl = new StravaLayer(dl, oa);

app.use("/webhook", webhook_handlers(dl, sl));
app.use("/auth", auth_handlers(dl, oa, sl));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port ?? ""}`);
});
