const express = require('express')
const {  OpenAI } = require('openai');
require('dotenv').config()

const ContentGenRouter = express.Router()


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});



ContentGenRouter.get('/getshayri', async (req, res) => {
    try {
      const keyword = req.query.keyword;
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `write a shayri on <${keyword}> in both languages hindi and english as well` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send("Something went wrong");
    }
  });


ContentGenRouter.get('/getjoke', async (req, res) => {
    try {
      const keyword = req.query.keyword;
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `write a joke on <${keyword}> in both languages hindi and english as well` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send("Something went wrong");
    }
  });


ContentGenRouter.get('/getstory', async (req, res) => {
    try {
      const keyword = req.query.keyword;
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `write a short story on <${keyword}> in both languages hindi and english as well` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send("Something went wrong");
    }
  });


ContentGenRouter.get('/getquote', async (req, res) => {
    try {
      const keyword = req.query.keyword;
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `write a quote on <${keyword}> in both languages hindi and english as well` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send("Something went wrong");
    }
  });

  

  module.exports = {ContentGenRouter}

// app.get('/getstory', async (req, res) => {
    //     try {
    //       const keyword = req.query.keyword;
    //       const prompt = `Write a quote on the following title <${keyword}>`
      
    //       const response = await axios.post('https://api.openai.com/v1/engines/davinci-002/completions', {
    //         prompt,
    //         max_tokens: 100,
    //         temperature: 0.7,
    //         n: 1
    //       }, {
    //         headers: {
    //           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //           'Content-Type': 'application/json'
    //         }
    //       });
      
    //       const story = response.data.choices[0].text.trim();
    //       res.json({ content : story });
    //     } catch (error) {
    //       console.error('Error:', error.response.data);
    //       res.status(500).json({ error: 'Something went wrong' });
    //     }
    //   });