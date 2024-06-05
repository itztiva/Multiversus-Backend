import app from "..";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import axios from "axios";

export default function () {
  app.post("/access", async (c) => {
    return c.json({
      token:
        "tttVhEVHWFIMa23VCEJXFZHDPewZ8Fda7sazpFrTWfP+Sjenn8TbCdwlQVUOS6gIZdo/HYP6ii6yd8J5jVPPR0Opzsk9pVW579M2DVHUz3xdBSio4hcoIU6pOLcahArDy7cMOdlloyrF2E56O1R5NmqEa8BzzdjMO5V7drtIAOjdbBpYL1qlew==",
      wb_network: {
        network_token:
          "I+MPokHx/JkCFmuHpcEiaoRCI9LKgqoZhy+coQ/hcNFUEetudPokFq7vn+WUJRzr0xd4S3a4qso+oFHMwDtsiaR3YGnkXaZXaFTGazhvwb8=",
      },
    });
  });

  app.get("//", async (c) => {
    return c.body("");
  });

  app.post("/sessions/auth/token", async (c) => {
    const accessToken = jwt.sign(
      {
        v: 1,
        iss: "prod-network",
        env: Math.random().toString(36).substring(2, 14),
        pid: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
        exp: 1717469833,
        sid: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      },
      "SignedUserToken"
    );

    const ipInfo = await axios.get(
      `https://ipinfo.io/${c.req.header(
        "cf-connecting-ip"
      )}?token=730896329bc54d`
    ); 
    const state = ipInfo.data.region;
    const country = ipInfo.data.country;
    const stateInfo = state
      .split(" ")
      .map((word: string) => word[0])
      .join("")
      .toUpperCase();

      const valid_avatars = [
        "multiversus-wonder-woman",
        "multiversus-shaggy",
        "multiversus-bugs-bunny",
        "multiversus-harley-quinn",
        "multiversus-tom-and-jerry",
        "multiversus-batman",
        "multiversus-finn",
        "multiversus-arya",
        "multiversus-garnet"
      ];
      
      function getValidAvatar() {
        const randomFr = Math.floor(Math.random() * valid_avatars.length);
        return valid_avatars[randomFr];
      }

    return c.json({
      access_token: accessToken,
      account: {
        age_category: "",
        avatar: {
          image_url:
            `https://prod-network-images.wbagora.com/network/account-wbgames-com/${getValidAvatar()}.jpg`,
          name: getValidAvatar().toLocaleUpperCase,
          slug: getValidAvatar(),
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
          country: country,
          location_data: {
            location_type: "request_geoip",
            location_value: null,
          },
          territory: country + "-" + stateInfo,
          updated_at: new Date().toISOString(),
        },
        game_links: [
          {
            age_category: "teen",
            age_information: {
              age_data: {
                age_type: "age",
                age_value: 14,
              },
              country: country,
              location_data: {
                location_type: "request_geoip",
                location_value: null,
              },
              territory: country + "-" + stateInfo,
              updated_at: new Date().toISOString(),
            },
            all_platforms: {
              epic_games: {
                access_time: new Date().toISOString(),
              },
            },
            game: "multiversus",
            is_requesting_game: true,
            last_accessed: new Date().toISOString(),
            last_game_login: new Date().toISOString(),
            last_seen_platform: "epic_games",
            public_id: crypto.randomBytes(17).toString("hex").substring(0, 16),
          },
          {
            age_category: "adult",
            age_information: null,
            all_platforms: {},
            game: "warnerbrosgames-com",
            is_requesting_game: false,
            last_accessed: null,
            last_game_login: new Date().toISOString(),
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
