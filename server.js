const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', categoryRoutes);

sequelize.sync().then(() => console.log('Database connected'));

app.listen(3000, () => console.log('Server started on port 3000'));
