import React, { useState } from 'react'

import logo from '../../../assets/white-logo.png';

import { 
    GAME_POINTS_TO_FINISH, 
    DEFAULT_GAME_POINTS, 
    POINTS_DIC, 
    INITIAL_POINTS 
} from '../../../utils/counterConstants';
import { getBloodPoints, getMagicPoints } from '../../../utils/functions';

import TeamInfo from './TeamInfo';


const index = () => {

    const defaultTeam = {
        totalPoints: INITIAL_POINTS,
        bloodPoints: getBloodPoints(INITIAL_POINTS),
        magicPoints: getMagicPoints(INITIAL_POINTS),
    };

    const [roundPoints, setRoundPoints] = useState(DEFAULT_GAME_POINTS);
    const [teams, setTeams] = useState([
        { id: 1, ...defaultTeam},
        { id: 2, ...defaultTeam},
        { id: 3, ...defaultTeam},
    ]);

    const team1 = teams.find(team => team.id === 1);
    const team2 = teams.find(team => team.id === 2);
    const team3 = teams.find(team => team.id === 3);

    const handleAddPoints = (teamId) => {
        
        const selectedTeam = teams.find(team => team.id === teamId);
        const newTotalPoints = selectedTeam.totalPoints + roundPoints;        

        const newSelectedTeam = {
            ...selectedTeam,
            totalPoints: newTotalPoints,
            bloodPoints: getBloodPoints(newTotalPoints),
            magicPoints: getMagicPoints(newTotalPoints),
        }

        const newTeams = [...teams.filter(team => team.id !== teamId), newSelectedTeam];
        setTeams([...newTeams]);
    }

    return (
        <div className='flex flex-col w-screen h-screen items-center p-4'>
            
            <img 
                src={logo}
                alt="white logo"
                className='w-36'
            />

            <TeamInfo 
                team={team1}
            />

            <button onClick={() => handleAddPoints(1)}>
                Add point
            </button>

        </div>
    )
}

export default index