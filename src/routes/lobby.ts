import app from "..";

export default function () {
  app.put("/ssc/invoke/create_party_lobby", async (c) => {
    // is there a body for the accountId?

    return c.json({
      body: {
        lobby: {
          Teams: [
            {
              TeamIndex: 0,
              Players: {
                "665d1d8fe254cdd73b23431b": {
                  Account: {
                    id: "665d1d8fe254cdd73b23431b",
                  },
                  BotSettingSlug: "",
                  LobbyPlayerIndex: 0,
                  CrossplayPreference: 0,
                },
              },
              Length: 1,
            },
            {
              TeamIndex: 1,
              Players: {},
              Length: 0,
            },
            {
              TeamIndex: 2,
              Players: {},
              Length: 0,
            },
            {
              TeamIndex: 3,
              Players: {},
              Length: 0,
            },
            {
              TeamIndex: 4,
              Players: {},
              Length: 0,
            },
          ],
          LeaderID: "665d1d8fe254cdd73b23431b",
          LobbyType: null,
          ReadyPlayers: {},
          PlayerGameplayPreferences: {
            "665d1d8fe254cdd73b23431b": null,
          },
          GameVersion: null,
          HissCrc: null,
          Platforms: {
            "665d1d8fe254cdd73b23431b": null,
          },
          LockedLoadouts: {
            "665d1d8fe254cdd73b23431b": {
              Character: "character_C020",
              Skin: "skin_c020_default",
            },
          },
          ModeString: "1v1",
          IsLobbyJoinable: true,
          MatchID: "665f9a4cf6fb04cce03c86e1",
        },
      },
      metadata: null,
      return_code: 0,
    });
  });
}
