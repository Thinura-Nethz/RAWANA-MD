const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "gncF0S4J#RozYOc8AYESD_8B7K0xYK9Z_E_-qR-CHvWd8Q9pJDfI":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:XLdvkJvrWYaLLrweahaKXtVwcTIWiJeu@caboose.proxy.rlwy.net:18642",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 



             
