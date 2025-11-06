const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~0FYyhbKa#Cwb4mUaR1eGGhhQ7gGj-kbn5VkoNgDNPBqe84AxiKlg'
};
