// main.js
import { uploadImage } from './Photo.js';

import { logIn } from './User.js';

async function main() {

    const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});

    if (u.error) {
        console.log("Log In error")
        console.log(u.error)
        return;a
    }

  // Create a mock file (Blob) for testing
  const mockFile = new Blob(['file content'], { type: 'image/png' });

  try {
    const { data, error } = await uploadImage(mockFile);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      console.log('Image uploaded successfully:', data);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

main();
