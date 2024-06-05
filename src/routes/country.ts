import app from '..'

export default function () {
    app.get("/ssc/invoke/get_country_code", async (c) => {
        return c.json({
            "body": "regi",
            "on": "US",
            "metadata": "return_code"
          })
    })
}