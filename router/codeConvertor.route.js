const express = require('express')
const {  OpenAI } = require('openai');
require('dotenv').config()

const codeConvertorRoute = express.Router()


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});



codeConvertorRoute.post('/', async (req, res) => {
    try {
      const {lan, code } = req.body
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `convert the below code to ${lan} \n code <${code}>` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content, isOk : true});
    } catch (error) {
        console.log(error)
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send({msg : "Something went wrong", isOk : false});
    }
  });

codeConvertorRoute.post('/debug', async (req, res) => {
    try {
      const { code } = req.body
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Debug the below code:  \n ${code}` }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content, isOk : true});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send({msg : "Something went wrong", isOk : false});
    }
  });

codeConvertorRoute.post('/quality', async (req, res) => {
    const content = `Please provide a code quality assessment for the given code. Consider the following parameters:

    1. Code Consistency: Evaluate the code for consistent coding style, naming conventions, and formatting.
    2. Code Performance: Assess the code for efficient algorithms, optimized data structures, and overall performance considerations.
    3. Code Documentation: Review the code for appropriate comments, inline documentation, and clear explanations of complex logic.
    4. Error Handling: Examine the code for proper error handling and graceful error recovery mechanisms.
    5. Code Testability: Evaluate the code for ease of unit testing, mocking, and overall testability.
    6. Code Modularity: Assess the code for modular design, separation of concerns, and reusability of components.
    7. Code Complexity: Analyze the code for excessive complexity, convoluted logic, and potential code smells.
    8. Code Duplication: Identify any code duplication and assess its impact on maintainability and readability.
    9. Code Readability: Evaluate the code for readability, clarity, and adherence to coding best practices.
    
    Please provide a summary of the code quality assessment and a report showing the percentage-wise evaluation for each parameter mentioned above.
    `
    try {
      const { code } = req.body
  
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: content }],
        model: 'gpt-3.5-turbo',
      });
    
      res.send({content: completion.choices[0].message.content, isOk : true});
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      res.status(500).send({msg : "Something went wrong", isOk : false});
    }
  });


  module.exports = {codeConvertorRoute}