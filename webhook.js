const axios = require('axios');

// Đăng ký webhook cho sự kiện "messages"
const registerWebhook = async (accessToken, webhookUrl) => {
  const url = `https://graph.facebook.com/v8.0/me/subscribed_apps?access_token=${accessToken}`;
  const data  = {
    subscribed_fields: ['messages'],
    callback_url: webhookUrl,
    verify_token: 'verify_token_2022',
  };
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  }
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

registerWebhook('EAAShaTk382gBAF2hojWQv3ozlxGy8JEd6ZADokZAHUf45gpFzsRrlQNZCyYTEPxhOUZCUuFZB4mZAoT0IKIinIQXaeVpAZBu5MkKOoT7FZBURIkxgXG7rYZBQzr5l1ldsvpoOXyO5XbjjUZApgI9eIK2RCpZBP6u0ceREzNAIZAaUyO3X7rnJdGT1SKCwDhEvQPrViAjALwLfpjWCgZDZD', 'https://ex-express.vercel.app/webhook')
  .then(response => {
    console.log(response);
  })