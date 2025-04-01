const shortid = require("shortid");
const Url = require("../models/Url");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

exports.shortenUrl = async (req, res) => {
    try {
        const { longUrl } = req.body;

        if (!longUrl || !longUrl.startsWith("http")) {
            return res.status(400).json({ error: "Invalid URL" });
        }

        // Check if URL already exists
        let existingUrl = await Url.findOne({ longUrl });
        if (existingUrl) {
            return res.json({ shortUrl: `${process.env.BASE_URL}/${existingUrl.shortId}` });
        }

        // Generate short ID
        const shortId = shortid.generate();

        // Save to DB
        const newUrl = await Url.create({ longUrl, shortId });

        res.json({ shortUrl: `${process.env.BASE_URL}/${newUrl.shortId}` });
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
};
