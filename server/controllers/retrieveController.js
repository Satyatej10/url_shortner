const Url = require("../models/Url");

exports.redirectUrl = async (req, res) => {
    try {
        const { shortId } = req.params;
        const urlEntry = await Url.findOne({ shortId });

        if (!urlEntry) {
            return res.status(404).json({ error: "URL not found" });
        }

        res.redirect(urlEntry.longUrl);
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
};
