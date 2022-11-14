const http = require('http'); 
const express = require('express'); 
const app = express();
require('dotenv').config(); 
const bodyParser = require('body-parser'); 
// const axios = require('axios'); 
const cors = require('cors'); 
// const FormData = require('form-data'); 
// const csv = require('csv-parser') 
// const fs = require('fs') 

app.use(bodyParser.json({limit: "50mb"})) 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(cors()); 

/* Routes */
app.get('/swimlane-select', (req, res) => {
    res.send({
    data: 
        [
            { label: "Tag 1", value: 1 },
            { label: "Tag 2", value: 2 },
            { label: "Tag 3", value: 3 },
            { label: "Tag 4", value: 4 },
            { label: "Tag 5", value: 5 },
          ]
    })
}),

app.get('/swimlane-filter', (req, res) => {
    res.send({
        results: [
            {
              "indicator": "mal@emalware.net",
              "ti_tool": "Virus Total",
              "ti_tag": "Malicious",
              "ti_score": "3 - High",
              "ti_permalink": "https://virustoal.com/my-virus-link",
              "ti_logo": "https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-malware-security-prettycons-flat-prettycons.png"
            },
            {
              "indicator": "emailware.net",
              "ti_tool": "URLHaus",
              "ti_tag": "Suspicious",
              "ti_score": "7/10",
              "ti_logo": "https://img.icons8.com/external-filled-color-icons-papa-vector/78/null/external-Suspicious-File-online-piracy-filled-color-icons-papa-vector.png"
            },
            {
              "indicator": "10.24.9182",
              "ti_tool": "AlienVault",
              "ti_tag": "Benign",
              "ti_score": "32/100",
              "ti_logo": "https://img.icons8.com/color/48/null/checked--v1.png"
            },
            {
              "indicator": "bad@emalware.net",
              "ti_tool": "Hybrid Analysis",
              "ti_tag": "Error",
              "ti_score": "null",
              "ti_logo": "https://img.icons8.com/office/16/null/error-cloud.png"
            },
            {
              "indicator": "malicious@emalware.net",
              "ti_tool": "Domain Tools",
              "ti_tag": "Unknown",
              "ti_score": "n/a",
              "ti_logo": "https://img.icons8.com/ios/50/null/question-mark--v1.png"
            },
            {
              "indicator": "scarymalicious@emalware.net",
              "ti_tool": "ipqualityscore",
              "ti_tag": "Suspicious",
              "ti_score": "5 - High",
              "ti_logo": "https://img.icons8.com/external-filled-color-icons-papa-vector/78/null/external-Suspicious-File-online-piracy-filled-color-icons-papa-vector.png"
            },
            {
              "indicator": "mal@emalware.net",
              "ti_tool": "AbuseIPDB",
              "ti_tag": "Unknown",
              "ti_score": "n/a",
              "ti_logo": "https://img.icons8.com/ios/50/null/question-mark--v1.png"
            },
            {
              "indicator": "safeemailware.net",
              "ti_tool": "URLScan.io",
              "ti_tag": "Benign",
              "ti_score": "23/100",
              "ti_logo": "https://img.icons8.com/color/48/null/checked--v1.png"
            },
            {
              "indicator": "10.32.100.122",
              "ti_tool": "None",
              "ti_tag": "New",
              "ti_score": "87/100",
              "ti_logo": "https://img.icons8.com/ios/50/null/question-mark--v1.png"
            }
          ]
    })
})
/* Routes */

const server = http.createServer(app); 
server.listen(3002, () => { 
    console.log(`server is running on port 3002!`) 
})