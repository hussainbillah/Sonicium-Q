const express = app.use(express.static(path.join(__dirname, 'public')));ess');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('Sonicium Q Backend Running');
});

module.exports = app;
app.use('/api/auth', require('./routes/authRoutes'));