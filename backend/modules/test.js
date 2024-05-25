// main.js
import { insertDocumental, deleteDocumental } from './Documental.js';

import { logIn } from './User.js';

async function runUpdateUser() {
    const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});

    if (u.error) {
        console.log("Log In error")
        console.log(u.error)
        return;
    }

    // const u2 = await insertDocumental({ title: "The Godfather", publishYear: 1972, category: 7, trailer: "https://www.youtube.com/watch?v=sY1S34973zA", synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", price: 10.99 });
    const u2 = await deleteDocumental(15);

    console.log(u2);
} 

runUpdateUser();
