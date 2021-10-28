const express = require('express');
const router = express.Router();

const gamesList = [
  {
    gameName: "Super Mario World",
    category: "Platform",
    year: 1990,
    imgURL: '',
    havePlay = true,
    rating: 5
  },
  {
    gameName: "Zelda: Ocarina of Time",
    category: "Action RPG",
    year: 1998,
    imgUrl: '',
    havePlay = true,
    rating: 5
  }
];

function pleaseCheck(newGame) {
  if (newGame.gameName == undefined ||
    newGame.category == undefined ||
    newGame.year == undefined ||
    newGame.imgUrl == undefined ) {
    return 'Please Add a New Game via body JSON structure "gameName", "category" and "year"';
  } else {
    gamesList.push(newGame);
    console.log('Someone just Added a New Game!');
    return 'Thanks for Your Contribution! 💚';
  };
};

router.get('/', (req, res) => {
  res.send(gamesList);
});

router.get('/:id', (req, res) => {
  const id = req.params.id - 1;
  res.send(gamesList[id]);
});

router.post('/new', (req, res) => {
  const { gameName, category, year, imgUrl, havePlay } = req.body;
  let newGame = { 
    gameName: gameName,
    category: category,
    year: year,
    imgUrl: imgUrl,
    havePlay: havePlay
  };
  res.send(pleaseCheck(newGame));
});

// app.put('/list/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(id);
// });

// app.delete('list/:id', (req, res) => {
//   const id = req.params.id -1;
//   delete lista[id];
//   res.send(lista);
// });

module.exports = router;