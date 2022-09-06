// install express with `npm install express` 
const express = require('express')
const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('contact-form')
const app = express()
const cors = require('cors');
app.use (express.json());
app.use(cors({
  origin: ['*', 'http://127.0.0.1:5173']
}))
 
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  const data = { name, email, message };
  const newMessage = await db.put(data);
  res.status(201).json(newMessage);
})

// export 'app'
module.exports = app