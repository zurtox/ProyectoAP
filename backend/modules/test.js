// main.js
import { isContentBought  } from './Content.js';
import { getPurchaseContent } from './Purchase.js';

import { logIn } from './User.js';

async function runUpdateUser() {
    const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});

    if (u.error) {
        console.log("Log In error")
        console.log(u.error)
        return;
    }

    const cart = await isContentBought(7); 


    console.log(cart)
} 

runUpdateUser();
