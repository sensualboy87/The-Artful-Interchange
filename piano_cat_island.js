// The Artful Interchange
// A JavaScript library for enjoyable data interchange between web applications

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// Server Setup
const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes 
app.get('/', (req, res) => {
    res.json({message: 'Welcome to The Artful Interchange!'});
});

// API Endpoints 
// Retrieve data
app.get('/retrieve', (req, res) => {
    request.get({
        url: 'www.example.com/api/retrieve',
        headers: {
            'Content-Type': 'application/json'
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500);
            return res.send({
                err: 'An error occurred while retrieving data.'
            });
        } 

        const jsonBody = JSON.parse(body);
        res.status(200);
        res.send(jsonBody);
    });
});

// Store data
app.post('/store', (req, res) => {
    request.post({
        url: 'www.example.com/api/store',
        json: req.body,
        headers: {
            'Content-Type': 'application/json'
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500);
            return res.send({
                err: 'An error occurred while storing data.'
            });
        } 

        const jsonBody = JSON.parse(body);
        res.status(200);
        res.send(jsonBody);
    });
});

// Update data
app.put('/update', (req, res) => {
    request.put({
        url: 'www.example.com/api/update',
        json: req.body,
        headers: {
            'Content-Type': 'application/json'
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500);
            return res.send({
                err: 'An error occurred while updating data.'
            });
        } 

        const jsonBody = JSON.parse(body);
        res.status(200);
        res.send(jsonBody);
    });
});

// Delete data
app.delete('/delete', (req, res) => {
    request.delete({
        url: 'www.example.com/api/delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500);
            return res.send({
                err: 'An error occurred while deleting data.'
            });
        } 

        const jsonBody = JSON.parse(body);
        res.status(200);
        res.send(jsonBody);
    });
});

// Server 
app.listen(port, () => {
    console.log(`The Artful Interchange is listening on port ${port}`);
});