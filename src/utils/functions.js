import { BLOOD_POINTS_TO_MAGIC } from './counterConstants';

const getMagicPoints = totalPoints => Math.floor(totalPoints / BLOOD_POINTS_TO_MAGIC);

const getBloodPoints = totalPoints => totalPoints % BLOOD_POINTS_TO_MAGIC;

export {
    getBloodPoints,
    getMagicPoints,
}