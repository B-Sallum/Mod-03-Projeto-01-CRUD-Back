let message = "";

function pleseGiveMeAnId() {
  let gameId = (Math.random() * 100000) * (Math.random() * 100000);
  let newGameId = gameId.toFixed(0);
  return newGameId;
};

let gamesList = [
  {
    id: pleseGiveMeAnId(),
    name: "Super Mario World",
    category: "Platform",
    year: 1990,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg',
    havePlay: true,
    rating: 5
  },
  {
    id: pleseGiveMeAnId(),
    name: "Zelda: A Link to the Past",
    category: "Action RPG",
    year: 1991,
    imgUrl: 'https://1.bp.blogspot.com/-0_RMZLKFCac/X0ObUFOrZPI/AAAAAAAACzw/t9BEnzXfbXExcUracTEcc1fHTf5aG7WNQCLcBGAsYHQ/s2048/Zelda_SNES.jpg',
    havePlay: false,
    rating: 7
  },
  {
    id: pleseGiveMeAnId(),
    name: "Super Mario Kart",
    category: "Race Shooter",
    year: 1992,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/f/fc/Super_Mario_Kart_front.jpg',
    havePlay: true,
    rating: 9
  },
  {
    id: pleseGiveMeAnId(),
    name: "Sonic: the Hedgehog",
    category: "Racing Platform",
    year: 1992,
    imgUrl: 'https://www.sega-brasil.com.br/fullalbums/jogos/Mega%20Drive/Caixas%20de%20Plastico%20Preta/Sonic%20the%20Hedgehog/sonic_ft_c_zfm_sls.jpg',
    havePlay: false,
    rating: 10
  },
  {
    id: pleseGiveMeAnId(),
    name: "Donkey Kong Country",
    category: "Platform",
    year: 1994,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/83/Donkey_Kong_Country_capa.png',
    havePlay: false,
    rating: 5
  },
  {
    id: pleseGiveMeAnId(),
    name: "Alex Kidd in Miracle World",
    category: "Precision Platform",
    year: 1991,
    imgUrl: 'https://www.sega-brasil.com.br/fullalbums/jogos/Master%20System/Caixas%20de%20Papelao%20Branca/Alex%20Kidd%20in%20Miracle%20World/alexkiddinmiracleworld_ft_zfm_sls.png',
    havePlay: false,
    rating: 9
  }
];

class gamesController {

  getGames = (req, res) => {
    res.status(200).send(gamesList);
  }

  getGamesById = (req, res) => {
    const idParam = Number(req.params.id);
    const game = gamesList.find(game => game.id == idParam);
    
    if (!game) {
      return res.status(404).send({
        message: 'Game not found',
      })
    }
    res.status(200).send(game);
  }

  newGame = (req, res) => {
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
  
      gamesList.push(newGame);
  
      console.log(`User just Added ${newGame.name}`);
  
      message = `Game ID ${newGame.id}. ${newGame.name} Added to Games! Thanks for Your Contribution! 💚`;
      res.status(201).send({message: message});  
  }

  editById = (req, res) => {
    const idParam = req.params.id;
    let gameEdit = req.body;
  
    const index = gamesList.findIndex(game => game.id == idParam);
  
    let oldGame = gamesList[index]
    gamesList[index] = {
      ...gamesList[index],
      ...gameEdit
    };
  
    console.log(`Someone just Altered ${oldGame.name}!`);
  
    message = `${gameEdit.name} Successfully Changed`;
  
    res.status(201).send({message: message});
  }

  deleteById = (req, res) => {
    const idParam = req.params.id;
  
    const index = gamesList.findIndex(game => game.id == idParam);
  
    const gameDel = gamesList[index];
  
    gamesList.splice(index, 1);

    console.log(`User just Deleted ${gameDel.name}`);
  
    message = `${gameDel.name} Successfully Deleted`;
  
    res.status(200).send({message: message});
  }
}

module.exports = gamesController;