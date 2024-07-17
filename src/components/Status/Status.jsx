const Status = ({ team, money, totalStrength, totalAgility }) => {
    return (
        <>
            <h2>Money: {money}</h2>
            <h3>{team.length === 0 ? `Choose your team members` : `Edit team members`}</h3>
            <h3>Team Strength: {totalStrength} | Team Agility: {totalAgility}</h3>
        </>
    )
}

export default Status;