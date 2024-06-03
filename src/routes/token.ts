import app from "..";

export default function () {
    app.post("/sessions/auth/token", async (c) => {
       return c.json({
            "access_token" : "",
            "account" : {
               "age_category" : "",
               "avatar" : {
                  "image_url" : "",
                  "name" : "",
                  "slug" : ""
               },
               "can_change_username" : "",
               "completed" : "",
               "created_at" : "",
               "game_age_category" : "",
               "game_age_information" : {
                  "age_data" : {
                     "age_type" : "",
                     "age_value" : ""
                  },
                  "country" : "",
                  "location_data" : {
                     "location_type" : "",
                     "location_value" : ""
                  },
                  "territory" : "",
                  "updated_at" : ""
               },
               "game_links" : [
                  {
                     "age_category" : "",
                     "age_information" : {
                        "age_data" : {
                           "age_type" : "",
                           "age_value" : ""
                        },
                        "country" : "",
                        "location_data" : {
                           "location_type" : "",
                           "location_value" : ""
                        },
                        "territory" : "",
                        "updated_at" : ""
                     },
                     "all_platforms" : {
                        "epic_games" : {
                           "access_time" : ""
                        }
                     },
                     "game" : "",
                     "is_requesting_game" : "",
                     "last_accessed" : "",
                     "last_game_login" : "",
                     "last_seen_platform" : "",
                     "public_id" : ""
                  },
                  {
                     "age_category" : "",
                     "age_information" : "",
                     "all_platforms" : {},
                     "game" : "",
                     "is_requesting_game" : "",
                     "last_accessed" : "",
                     "last_game_login" : "",
                     "last_seen_platform" : "",
                     "public_id" : ""
                  }
               ],
               "id" : "",
               "is_soft_locked" : "",
               "last_login" : "",
               "locale" : "",
               "mfa_active" : "",
               "password_set" : "",
               "presence_state" : "",
               "public_id" : "",
               "updated_at" : "",
               "username" : ""
            },
            "expires_in" : "",
            "mfa_required" : "",
            "sdk" : {
               "realtime" : {
                  "default-cluster" : "",
                  "enabled" : "",
                  "servers" : {
                     "ec2-us-east-1-prod-network" : {
                        "prod-network-realtime-1/1" : {
                           "udp" : "",
                           "ws" : "",
                           "wss" : ""
                        },
                        "prod-network-realtime-1/2" : {
                           "udp" : "",
                           "ws" : "",
                           "wss" : ""
                        },
                        "prod-network-realtime-2/1" : {
                           "udp" : "",
                           "ws" : "",
                           "wss" : ""
                        },
                        "prod-network-realtime-2/2" : {
                           "udp" : "",
                           "ws" : "",
                           "wss" : ""
                        }
                     }
                  }
               }
            }
         })
    });
}
