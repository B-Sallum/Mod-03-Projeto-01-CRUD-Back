const express = require('express');
const cors = require('cors');

const app = express();

const gamesRouter = require('./routes/games.route');

app.use(express.json());
app.use(cors());

app.use('/', gamesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})