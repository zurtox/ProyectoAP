// main.js
import { countFemaleUsers, countMaleUsers, countOtherUsers, countNotDefinedUsers } from './User.js';

async function runUpdateUser() {
    try {
        const femaleCount = await countFemaleUsers();
        const maleCount = await countMaleUsers();
        const otherCount = await countOtherUsers();
        const notDefinedCount = await countNotDefinedUsers();

        console.log(`Number of female users: ${femaleCount.count}`);
        console.log(`Number of male users: ${maleCount.count}`);
        console.log(`Number of other users: ${otherCount.count}`);
        console.log(`Number of not defined users: ${notDefinedCount.count}`);
    } catch (error) {
        console.error('Error running update user:', error);
    }
}

runUpdateUser();
