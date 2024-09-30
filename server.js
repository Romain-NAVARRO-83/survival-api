const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const { sequelize } = require('./models');
const usersRouter = require('./routes/users');
const survivorsRouter = require('./routes/survivors');
const weaponsRouter = require('./routes/weapons');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/survivors', survivorsRouter);
app.use('/weapons', weaponsRouter);

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database connected!');
});
