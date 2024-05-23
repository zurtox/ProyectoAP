import { login, actualUser, logOutUser, recoverPassword } from './User.js';

async function testSignUp() {

    const recover = await recoverPassword("omarzunigpi@gmail.com");

    console.log(recover);

}

testSignUp();
