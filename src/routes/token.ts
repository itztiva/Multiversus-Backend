import app from "..";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default function () {
  app.post("/sessions/auth/token", async (c) => {
    const accessToken = jwt.sign(
      {
        v: 1,
        iss: "prod-network",
        env: "61ba7f301c719e2a4fef4c37",
        pid: "f8cd75bce1a5479c9a81134ae7b6589d",
        exp: 1717469833,
        sid: "d6a5be8f-64f1-4d9b-bd6c-3f29c1e4d5b2",
      },
      "fr"
    );
 
    return c.json({
      access_token: accessToken,
      account: {
        age_category: "",
        avatar: {
          image_url:
            "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-bugs-bunny.jpg",
          name: "MultiVersus Bugs Bunny",
          slug: "multiversus-bugs-bunny",
        },
        can_change_username: true,
        completed: true,
        created_at: new Date().toISOString,
        game_age_category: "teen",
        game_age_information: {
          age_data: {
            age_type: "age",
            age_value: 14,
          },
          country: "US",
          location_data: {
            location_type: "request_geoip",
            location_value: null,
          },
          territory: "US-NJ",
          updated_at: new Date().toISOString,
        },
        game_links: [
          {
            age_category: "teen",
            age_information: {
              age_data: {
                age_type: "age",
                age_value: 14,
              },
              country: "US",
              location_data: {
                location_type: "request_geoip",
                location_value: null,
              },
              territory: "US-NJ",
              updated_at: new Date().toISOString,
            },
            all_platforms: {
              epic_games: {
                access_time: new Date().toISOString,
              },
            },
            game: "multiversus",
            is_requesting_game: true,
            last_accessed: new Date().toISOString,
            last_game_login: new Date().toISOString,
            last_seen_platform: "epic_games",
            public_id: crypto.randomBytes(17).toString("hex").substring(1),
          },
          {
            age_category: "adult",
            age_information: null,
            all_platforms: {},
            game: "warnerbrosgames-com",
            is_requesting_game: false,
            last_accessed: null,
            last_game_login: new Date().toISOString,
            last_seen_platform: null,
            public_id: null,
          },
        ],
        id: crypto.randomBytes(12).toString("hex"),
        is_soft_locked: "",
        last_login: new Date().toISOString,
        locale: "en-US",
        mfa_active: false,
        password_set: false,
        presence_state: 0,
        public_id: crypto.randomBytes(17).toString("hex").substring(1),
        updated_at: new Date().toISOString,
        username: "Itztiva",
      },
      expires_in: 86400,
      mfa_required: false,
      sdk: {
        realtime: {
          "default-cluster": "",
          enabled: "",
          servers: {
            "ec2-us-east-1-prod-network": {
              "prod-network-realtime-1/1": {
                udp: "0.0.0.0:0",
                ws: "ws://3.82.168.122:8101",
                wss: "wss://us-east-1-prod-network-realtime-1.wbagora.com:9101",
              },
              "prod-network-realtime-1/2": {
                udp: "0.0.0.0:0",
                ws: "ws://3.82.168.122:8102",
                wss: "wss://us-east-1-prod-network-realtime-1.wbagora.com:9102",
              },
              "prod-network-realtime-2/1": {
                udp: "0.0.0.0:0",
                ws: "ws://3.212.5.165:8101",
                wss: "wss://us-east-1-prod-network-realtime-2.wbagora.com:9101",
              },
              "prod-network-realtime-2/2": {
                udp: "0.0.0.0:0",
                ws: "ws://3.212.5.165:8102",
                wss: "wss://us-east-1-prod-network-realtime-2.wbagora.com:9102",
              },
            },
          },
        },
      },
    });
  });
}
