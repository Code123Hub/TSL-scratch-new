const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
