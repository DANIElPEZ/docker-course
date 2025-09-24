import express from 'express';
const app = express();

app.get('/hello', async (req, res) => {
     res.send('Hello');
});

app.listen(3000, async() => {
      console.log('working');
});