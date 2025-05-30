const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "AzkwQAQA#ZtyYLO7IHQZI87tH2vRSPu6RCHH6dCaq7_cqyj3ruJI":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:XLdvkJvrWYaLLrweahaKXtVwcTIWiJeu@caboose.proxy.rlwy.net:18642",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 



             
