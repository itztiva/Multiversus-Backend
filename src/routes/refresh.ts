import app from '..'

export default function () {
    const now = new Date();
    const tmrw = new Date(now)

    tmrw.setDate(tmrw.getDate() + 1);
    tmrw.setUTCHours(11, 0, 0, 0);

    const timeUntilTmrw = tmrw.getTime() - now.getTime();

    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setUTCHours(11, 0, 0, 0);

    const timeUntilNextWeek = nextWeek.getTime() - now.getTime();

    app.post("/ssc/invoke/attempt_daily_refresh", async (c) => {
        c.json({
            "body": {
                "NextDailyRefreshTime": timeUntilTmrw,
                "NextWeeklyRefreshTime": timeUntilNextWeek,
                "FreeCharacterRotation": [
                    "character_finn",
                    "character_c16",
                    "character_bugs_bunny",
                    "character_wonder_woman",
                    "character_harleyquinn",
                    "character_garnet",
                    "character_C0200",
                    "character_Jason",
                    "character_tom_and_jerry"
                ],
                "ReturnData": {}
            },
            "metadata": null,
            "return_code": 0
        })
    })
}