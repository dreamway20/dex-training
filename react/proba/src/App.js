import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

const games = [
  {
    home: { name: 'Dallas Mavericks', logo: './images/DALLAS_MAVERICKS.png', points: 114 },
    guest: { name: 'Los Angeles Lakers', logo: './images/LAKERS.svg', points: 100 },
  },
  {
    home: { name: 'Boston Celtics', logo: './images/CELTICS.png', points: 93 },
    guest: { name: 'Philadelphia 76ers', logo: './images/PHILADELPHIA.svg', points: 107 },
  },
  {
    home: { name: 'Golden State Warriors', logo: './images/GSW.svg', points: 102 },
    guest: { name: 'Miami Heat', logo: './images/MIAMI_HEAT.svg', points: 122 },
  },
  {
    home: { name: 'Milwaukee Bucks', logo: './images/MILWAUKEE_BUCKS.svg', points: 133 },
    guest: { name: 'Utah Jazz', logo: './images/UTAH_JAZZ.svg', points: 99 },
  },
];

function App() {
  const [currentGameIndex, setCurrentGame] = useState(0);
  const currentGame = games[currentGameIndex];
  const handleClick = () => {
    setCurrentGame((currentGameIndex) => currentGameIndex >= games.length - 1 ? 0 : currentGameIndex + 1);
  };
  return (
    <div className="container">
      <main className="main-content">

        <div className="controls">
          <button id="next" onClick={handleClick}>
            Next</button>
        </div>

        <article className="banner">
          <div className="banner-container" id="banner">
            <img src={currentGame.home.logo} alt="Логотип клуба хозяев" />

            <p>
              {currentGame.home.points} — {currentGame.guest.points}
            </p>

            <img src={currentGame.guest.logo} alt="Логотип клуба гостей" />
          </div>
          <div className="indicator" id="indicator">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
