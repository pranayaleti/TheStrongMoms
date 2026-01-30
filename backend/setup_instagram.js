require('dotenv').config();
const axios = require('axios');

// Use .env: META_APP_ID, META_APP_SECRET, META_SHORT_LIVED_TOKEN, META_PAGE_ID
const CONFIG = {
  appId: process.env.META_APP_ID || 'YOUR_APP_ID',
  appSecret: process.env.META_APP_SECRET || 'YOUR_APP_SECRET',
  shortLivedToken: process.env.META_SHORT_LIVED_TOKEN || 'YOUR_SHORT_LIVED_EXPLORER_TOKEN',
  pageId: process.env.META_PAGE_ID || '705706289296979' // The ID for TheStrongMoms
};

async function setupSocialIntegration() {
  try {
    // 1. Exchange short-lived token for a 60-day User Token
    const authRes = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token`, {
      params: {
        grant_type: 'fb_exchange_token',
        client_id: CONFIG.appId,
        client_secret: CONFIG.appSecret,
        fb_exchange_token: CONFIG.shortLivedToken
      }
    });
    const longLivedUserToken = authRes.data.access_token;

    // 2. Get the Permanent Page Token and Instagram Business ID
    const accountsRes = await axios.get(`https://graph.facebook.com/v18.0/me/accounts`, {
      params: {
        fields: 'access_token,name,instagram_business_account',
        access_token: longLivedUserToken
      }
    });

    const page = accountsRes.data.data.find(p => p.id === CONFIG.pageId);

    if (page) {
      console.log('\n--- CONFIGURATION DATA ---');
      console.log(`INSTAGRAM_ACCESS_TOKEN=${page.access_token}`);

      if (page.instagram_business_account) {
        console.log(`INSTAGRAM_USER_ID=${page.instagram_business_account.id}`);
      } else {
        console.log('INSTAGRAM_USER_ID=Not Found (Ensure Instagram is linked in Business Suite)');
      }

      console.log(`INSTAGRAM_USERNAME=@TheStrongMoms`);
      console.log('---------------------------\n');
      console.log('✅ Update your .env with the values above and restart your server.');
    } else {
      console.error('❌ Could not find Page "TheStrongMoms" with the provided ID.');
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

setupSocialIntegration();
