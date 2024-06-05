import app from "..";
import crypto from "crypto";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function () {
  app.get("/accounts/me", async (c) => {
    try {
      const HydraAccessToken = c.req.header("X-Hydra-Access-Token");

      if (!HydraAccessToken)
        return c.json({ error: "Missing header 'X-Hydra-Access-Token" }, 400);

      const decodedHydraToken = atob(HydraAccessToken)

      if (!decodedHydraToken)
        return c.json({ error: "Failed to decode accessToken" }, 400);


      console.log(decodedHydraToken)

      const ipInfo = await axios.get(
        `https://ipinfo.io/${c.req.header(
          "cf-connecting-ip"
        )}?token=730896329bc54d`
      ); // nrn lemme do my shit rq k
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
        age_category: "teen",
        avatar: {
          image_url: `https://prod-network-images.wbagora.com/network/account-wbgames-com/${getValidAvatar()}.jpg`,
          name: getValidAvatar().toLocaleLowerCase,
          slug: getValidAvatar(),
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
        can_change_username: true,
        completed: true,
        created_at: new Date().toISOString(),
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
        id: crypto.randomBytes(12).toString("hex").substring(0, 11),
        is_soft_locked: false,
        last_login: new Date().toISOString(),
        locale: "en-US",
        mfa_active: false,
        password_set: true,
        presence_state: 0,
        public_id: crypto.randomBytes(17).toString("hex").substring(0, 16),
        updated_at: new Date().toISOString(),
        username: "Itztiva",
      });
    } catch (error) {
      console.log(error)
      return c.text("Internal Server Error", 500);
    }
  });
}
