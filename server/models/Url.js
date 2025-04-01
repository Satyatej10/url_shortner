const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    clicks: { type: Number, default: 0 }
});

const Url = mongoose.model("Url", urlSchema);
console.log("✅ Url Model Loaded");

module.exports = Url;
