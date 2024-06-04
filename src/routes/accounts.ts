import app from "..";
import crypto from "crypto";

export function generateId () {

}

export default function () {

  app.get('/accounts/me', async (c) => {
    try {
      return c.json({
        age_category: 'teen',
        avatar: {
          image_url: 'https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-bugs-bunny.jpg',
          name: 'MultiVersus Bugs Bunny',
          slug: 'multiversus-bugs-bunny',
        },
        game_links: [
          {
            age_category: 'teen',
            age_information: {
              age_data: {
                age_type: 'age',
                age_value: 14,
              },
              country: 'US',
              location_data: {
                location_type: 'request_geoip',
                location_value: null,
              },
              territory: 'US-NJ',
              updated_at: new Date().toISOString(),
            },
            all_platforms: {
              epic_games: {
                access_time: new Date().toISOString(),
              },
            },
            game: 'multiversus',
            is_requesting_game: true,
            last_accessed: new Date().toISOString(),
            last_game_login: new Date().toISOString(),
            last_seen_platform: 'epic_games',
            public_id: crypto.randomBytes(17).toString('hex').substring(0, 16),
          },
          {
            age_category: 'adult',
            age_information: null,
            all_platforms: {},
            game: 'warnerbrosgames-com',
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
        game_age_category: 'teen',
        game_age_information: {
          age_data: {
            age_type: 'age',
            age_value: 14,
          },
          country: 'US',
          location_data: {
            location_type: 'request_geoip',
            location_value: null,
          },
          territory: 'US-NJ',
          updated_at: new Date().toISOString(),
        },
        id: crypto.randomBytes(12).toString('hex').substring(0, 11),
        is_soft_locked: false,
        last_login: new Date().toISOString(),
        locale: 'en-US',
        mfa_active: false,
        password_set: true,
        presence_state: 0,
        public_id: crypto.randomBytes(17).toString('hex').substring(0, 16),
        updated_at: new Date().toISOString(),
        username: 'Itztiva',
      });
    } catch (error) {
      console.error(error);
      return c.text('Internal Server Error', 500);
    }
  });
}
