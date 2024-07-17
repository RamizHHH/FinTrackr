const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { type } = require('os')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
})

mongoose.connection.on('connected', () => {
    console.log('Connected To MongoDB')
})

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});

const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now },
})

const Transaction = mongoose.model('Transaction', transactionSchema)

app.get('/transactions', async(req, res) => {
    try{
        const transactions = await Transaction.find();
        res.json(transactions)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

app.post('/transaction', async (req, res) => {
    const transaction = new Transaction({
        description: req.body.description,
        amount: req.body.amount,
    });
    try{
        const newTransaction = await transaction.save();
        res.status(201).json(newTransaction);
    }
    catch (err){
        res.status(400).json({message: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})