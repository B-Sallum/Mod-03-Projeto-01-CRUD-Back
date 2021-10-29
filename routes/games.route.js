const express = require('express');
const router = express.Router();

let message = "";

const gamesList = [
  {
    id: 1,
    name: "Super Mario World",
    category: "Platform",
    year: 1990,
    imgURL: 'https://c.tenor.com/zXoyWTrUReUAAAAC/super-mario-bros-nintendo.gif',
    havePlay: true,
    rating: 10
  },
  {
    id: 2,
    name: "Zelda: Ocarina of Time",
    category: "Action RPG",
    year: 1998,
    imgUrl: 'https://c.tenor.com/xaasBJILRhMAAAAd/zelda-oot.gif',
    havePlay: true,
    rating: 10
  }
];

function pleaseCheck(game) {
  if (game.name == undefined ||
    game.category == undefined ||
    game.year == undefined ||
    game.imgUrl == undefined) {
    return false;
  } else {
    return true
  };
}; // /([a-zA-Z0-9])/

function pleseGiveMeAnId() {
  let listSize = gamesList.length;
  let gameId = listSize + 1
  return gameId
};

router.get('/', (req, res) => {
  res.send(gamesList);
});

router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  const index = gamesList.findIndex(game => game.id == idParam);
  const game = gamesList[index];
  res.send(game);
});

router.post('/new', (req, res) => {
  const { name, category, year, imgUrl, havePlay, rating } = req.body;
  let newGame = { 
    id: pleseGiveMeAnId(),
    name: name,
    category: category,
    year: year,
    imgUrl: imgUrl,
    havePlay: havePlay,
    rating: rating
  };
  let validation = pleaseCheck(newGame);
  if (validation === true) {
    gamesList.push(newGame);
    console.log(`User just Added ${newGame.name}`);
    res.status(201).send({
      message: 'Thanks for Your Contribution! 💚',
      data: newGame
    });
  } else {
    res.send('Please Add a New Game via JSON: "name", "category", "year", "imgUrl", "havePlay": boolean and "rating": (1~10)');
  };
});

router.put('/edit/:id', (req, res) => {
  const idParam = req.params.id;
  let gameEdit = req.body;
  let validation = pleaseCheck(gameEdit);
  if (validation === true) {
    const index = gamesList.findIndex(game => game.id == idParam);
    let oldGame = gamesList[index]
    gamesList[index] = {
      ...gamesList[index],
      ...gameEdit
    };
    console.log(`Someone just Altered ${oldGame.name}!`);
    res.status(201).send({
      message: 'Thanks for Your Contribution! 💚',
      oldData: oldGame,
      newData: gameEdit
    });
  } else {
    res.send('Please Edit Game at /edit/:id via JSON body: "name", "category", "year", "imgUrl", "havePlay": boolean and "rating": (1~10)');
  };
});

router.delete('/delete/:id', (req, res) => {
  const game = req.params.id;
  

  message = game
  res.send(message);
});

module.exports = router;