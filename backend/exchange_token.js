require('dotenv').config();
const axios = require('axios');

// Use .env: META_APP_ID, META_APP_SECRET, META_SHORT_LIVED_TOKEN, META_PAGE_ID
const CONFIG = {
  appId: process.env.META_APP_ID || 'YOUR_APP_ID',
  appSecret: process.env.META_APP_SECRET || 'YOUR_APP_SECRET',
  shortLivedToken: process.env.META_SHORT_LIVED_TOKEN || 'YOUR_SHORT_LIVED_EXPLORER_TOKEN',
  pageId: process.env.META_PAGE_ID || 'YOUR_PAGE_ID' // The ID for "TheStrongMoms"
};

async function getPermanentToken() {
  try {
    // Step 1: Exchange short-lived User token for long-lived User token (60 days)
    const userTokenRes = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token`, {
      params: {
        grant_type: 'fb_exchange_token',
        client_id: CONFIG.appId,
        client_secret: CONFIG.appSecret,
        fb_exchange_token: CONFIG.shortLivedToken
      }
    });

    const longLivedUserToken = userTokenRes.data.access_token;
    console.log('--- Long-Lived User Token Acquired ---');

    // Step 2: Get the Permanent Page Access Token
    // By using a long-lived User token to ask for /me/accounts, the Page tokens returned never expire.
    const pageTokenRes = await axios.get(`https://graph.facebook.com/v18.0/me/accounts`, {
      params: { access_token: longLivedUserToken }
    });

    const page = pageTokenRes.data.data.find(p => p.id === CONFIG.pageId);

    if (page) {
      console.log('✅ Success! Copy this to your .env:');
      console.log(`INSTAGRAM_ACCESS_TOKEN=${page.access_token}`);
    } else {
      console.error('❌ Could not find a Page with that ID in your account.');
    }
  } catch (error) {
    console.error('Error exchanging token:', error.response?.data || error.message);
  }
}

getPermanentToken();
