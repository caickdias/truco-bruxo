import React, { useState } from 'react'

import logo from '../../../assets/white-logo.png';

import { 
    GAME_POINTS_TO_FINISH, 
    DEFAULT_GAME_POINTS, 
    INITIAL_POINTS 
} from '../../../utils/counterConstants';
import { getBloodPoints, getMagicPoints } from '../../../utils/functions';

import TeamInfo from './TeamInfo';
import RoundPoints from './TeamInfo/RoundPoints';


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
    ]);

    const team1 = teams.find(team => team.id === 1);
    const team2 = teams.find(team => team.id === 2);

    const handleAddPoints = (action, teamId) => {
        
        const selectedTeam = teams.find(team => team.id === teamId);
        const sign = action === 'remove' ? -1 : 1;
        const newTotalPoints = selectedTeam.totalPoints + (roundPoints * sign);       

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
        <div className='flex items-center justify-around flex-col w-screen h-screen p-4'>
            
            <div className='-mb-8'>
                <img 
                    src={logo}
                    alt="white logo"
                    className='w-24'
                />
            </div>

            <TeamInfo 
                id={1}
                team={team1}
                onChangeScore={handleAddPoints}
            />

            <TeamInfo 
                id={2}
                team={team2}
                onChangeScore={handleAddPoints}
            />

            <RoundPoints 
                onSelectRoundPoints={setRoundPoints}
            />

        </div>
    )
}

export default index