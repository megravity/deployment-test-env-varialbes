import express from "express";
import dotenv from "dotenv";
import axios from "axios";

// Load env variables from .env into process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const city = "berlin";

app.get("/", (req, rees) => {
    res.send("<h1>Hello Render</h1>");
});

app.get("/weather", async (req, res) => {
    // Proxy Server
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    );
    res.send(response.data);
});

app.listen(PORT, () => console.log("Server is running on port:", PORT));
