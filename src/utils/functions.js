import { BLOOD_POINTS_TO_MAGIC, GAME_POINTS_TO_FINISH } from './counterConstants';

const getMagicPoints = totalPoints => Math.floor(totalPoints / BLOOD_POINTS_TO_MAGIC);

const getBloodPoints = totalPoints => totalPoints % BLOOD_POINTS_TO_MAGIC;

const setTeamPoints = (points) => Math.min(Math.max(parseInt(points), 0), GAME_POINTS_TO_FINISH);

export {
    getBloodPoints,
    getMagicPoints,
    setTeamPoints
}