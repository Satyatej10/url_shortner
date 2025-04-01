const express = require("express");
const { shortenUrl } = require("../controllers/shortenController");  // Ensure this path is correct
const { redirectUrl } = require("../controllers/retrieveController"); // Ensure this path is correct

const router = express.Router();

// Route for shortening a URL
router.post("/shorten", shortenUrl);

// Route for redirecting short URLs
router.get("/:shortId", redirectUrl);

module.exports = router;
