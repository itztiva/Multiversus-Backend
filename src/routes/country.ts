import app from '..'
import axios from 'axios';

export default function () {
    app.get("/ssc/invoke/get_country_code", async (c) => {
        const ipInfo = await axios.get(
          `https://ipinfo.io/${c.req.header(
            "cf-connecting-ip"
          )}?token=730896329bc54d`
        ); 
        const country = ipInfo.data.country;
        return c.json({
            "body": "regi",
            "on": country,
            "metadata": "return_code"
          })
    })
}