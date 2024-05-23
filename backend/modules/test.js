import { updateUser, login } from './User.js';

async function runUpdateUser() {
    const id = 1;
    const firstName = 'Omar';
    const email = 'omarzunigpii@gmail.com';

    const log = await login("omarzunigpi@gmail.com", "password");

    console.log(log.data[0].email)

    const res = await updateUser(
        id,
        firstName,
        email
    );

    console.log(res)
}

runUpdateUser();