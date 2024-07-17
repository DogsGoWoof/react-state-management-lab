// src/App.jsx

import { useState } from "react";
import './App.css';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zomebieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  );
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleFighter = (fighter) => {
    // if (team.includes(fighter)) {
    //   setTeam(team.filter((name) => fighter.name !== name));
    //   setMoney(money + fighter.price);
    //   return;
    // }
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log('Not enough money.');
    }
  };
  const handleRemoveFighter = (fighter, index) => {
    if (team.includes(fighter)) {
      const newTeam = [...team]
      newTeam.splice(index, 1);
      console.log(index);
      setTeam(newTeam);
      setMoney(money + fighter.price);
      setTotalStrength(totalStrength - fighter.strength);
      setTotalAgility(totalAgility - fighter.agility);
    }
  };

  return (
    <>
      <h1>Hello Post-Apocalyptic World!</h1>
      <h2>Money: {money}</h2>
      <h3>{team.length === 0 ? `Choose your team members` : `Edit team members`}</h3>
      <h3>Team Strength: {totalStrength} | Team Agility: {totalAgility}</h3>
      <div className="rosters">
        <ul>
          {
            zomebieFighters.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt="fighter picture" />
                <div>
                  <p>Name: {fighter.name}</p>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                </div>
                <button onClick={() => handleFighter(fighter)}>Add</button>
              </li>
            ))
          }
        </ul>
        <ul>
          {
            team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt="fighter picture" />
                <div>
                  <p>Name: {fighter.name}</p>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                </div>
                <button onClick={() => handleRemoveFighter(fighter, index)}>Remove</button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App
