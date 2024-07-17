const Roster = ({ array, btnFunc, add }) => {
    return (
        <ul>
          {
            array.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt="fighter picture" />
                <div>
                  <p>Name: {fighter.name}</p>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                </div>
                <button onClick={() => btnFunc(fighter, index)}>{ add ? 'Add' : 'Remove'}</button>
              </li>
            ))
          }
        </ul>
    )
}

export default Roster;