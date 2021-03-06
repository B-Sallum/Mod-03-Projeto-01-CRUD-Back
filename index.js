const express = require('express');
const cors = require('cors');

const gamesRouter = require('./routes/games.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', gamesRouter);

const port = 3002;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})