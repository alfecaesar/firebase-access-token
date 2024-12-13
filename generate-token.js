const { GoogleAuth } = require('google-auth-library');

async function generateAccessToken() {
    const auth = new GoogleAuth({
        keyFile: 'path-service-account.json', // Replace with the path to your JSON key file
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    console.log('Access Token:', token);
}

generateAccessToken().catch(console.error);