import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello Server AWS!');
});

app.listen(50055, () => {
    console.log('Server is running on port 50055');
});
