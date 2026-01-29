require('dotenv').config();

module.exports = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI || "http://localhost:3000/login",
};  