import { getMovieRoles } from './Enum.js';

async function testEnumValues() {
    console.log("Fetching enum values for 'Gender'...");
    try {
        const data = await getMovieRoles();
        console.log('Enum values:', data);
    } catch (error) {
        console.error(error.message);
    }
}

testEnumValues();
