import dotenv from "dotenv";
import axios from "axios";
import express from "express";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.get("/api/crypto", (req, res) => {
    //Weekly
    axios
        .get(
            `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=${process.env.API_KEY}`
        )
        .then(({ data }) => {
            res.json(data);
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
