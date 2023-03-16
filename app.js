// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express';
import mongoose from 'mongoose';
// import {express} from 'express';
// import {mongoose} from 'mongoose';

const url = 'mongodb://localhost/OAdb'

import router from './routes/aliens.js';



const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

// const alienRouter = require('./routes/aliens')



// const blockchainRouter = require('./routes/sing')
app.use('/blockchain',router)
// app.use('/blockchain',blockchainRouter)
app.listen(9000, () => {
    console.log('Server started')
})