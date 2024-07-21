const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

const transactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

app.get('/Transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error('Error fetching transactions:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

app.post('/Transactions', async (req, res) => {
  const transaction = new Transaction({
    description: req.body.description,
    amount: req.body.amount,
  });
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    console.error('Error adding transaction:', err);
    res.status(400).json({ message: 'Bad Request', error: err.message });
  }
});

app.delete('/Transactions/:id', async(req, res)=>{
  try{
    const {id} = req.params;
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({message: "transaction deleted succsesfully"})
  }
  catch(error){
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
