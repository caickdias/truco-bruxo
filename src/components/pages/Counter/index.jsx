import React, { useState } from 'react'
import BloodBadge from '../../badges/BloodBadge'
import MagicMana from '../../badges/MagicMana'

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
    const [team1, setTeam1] = useState({ id: 1, ...defaultTeam});
    const [team2, setTeam2] = useState({ id: 2, ...defaultTeam});
    const [team3, setTeam3] = useState({ id: 3, ...defaultTeam});

    const handleAddPoints = () => {
        const newTotalPoints = team1.totalPoints + roundPoints;

        const newTeamPoints = {
            ...team1,
            totalPoints: newTotalPoints,
            bloodPoints: getBloodPoints(newTotalPoints),
            magicPoints: getMagicPoints(newTotalPoints),
        }
        setTeam1(newTeamPoints);
    }

    return (
        <div className='flex flex-col w-screen h-screen items-center'>
            
            <img 
                src={logo}
                alt="white logo"
                className='w-36'
            />

            <TeamInfo 
                team={team1}
            />

            <button onClick={handleAddPoints}>
                Add point
            </button>

        </div>
    )
}

export default index