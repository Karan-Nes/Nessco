import cors from 'cors'
import { z, ZodError } from 'zod';
import sheets, { SHEET_ID } from './sheetClient.js';
import express from "express";
import mongoose from "mongoose";
import db from './database.js'
var app = express();
app.use(express.json())
app.use(cors())
app.get('/', function (req, res) {
    res.send('Hello World!');
});


const dataSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
})
const Data = new mongoose.model("Data", dataSchema)
app.post("/feed", async (req, res) => {
    const { fname, lname, email, password } = req.body

    const data = new Data({
        fname, lname, email, password
    })
    try {
        let collection = await db.collection("datas");
        let result = await collection.insertOne(data);
        res.send(result).status(204);
    } catch (error) {
        console.log(error)
    }
    try {
        const rows = [fname,lname,email,password];
        console.log(rows);
        const respo=await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Page1!A2:D',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [rows],
            },
        });
        res.json({ message: 'Data added successfully' });
    } catch (error) {
        console.log(error)
    }
})
app.get('/fetch',async(req,res)=>{
    const headersResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'Page1!A2:D' // Assuming headers are in the first row (row 1)
      });
      const headers = headersResponse.data.values; // Get the headers from the response
    //   console.log(headers)
      res.json(headers)
})

app.post("/feed", async (req, res) => {
    const { data } = req.body
    try {
        console.log(rows);
        const respo=await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Page1!A2:D',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [data],
            },
        });
        res.json({ message: 'Data added successfully' });
    } catch (error) {
        console.log(error)
    }
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});