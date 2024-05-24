// main.js
import { isFavorite } from './FavoriteMovie.js';

import { logIn, getAgeDistribution } from './User.js';

async function runUpdateUser() {
    const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});

    if (u.error) {
        console.log("Log In error")
        console.log(u.error)
        return;
    }

    const u2 = await isFavorite({content: 2});

    console.log(u2);
} 

runUpdateUser();
