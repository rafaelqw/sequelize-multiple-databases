const express = require('express');
const app = express();
const port = 3000;

const DB = require('./database');

app.get('/user', async (req, res) => {
    const { database } = req.query;
    const { User } = DB[database].models;
    const user = await User.create({ firstName: "João", lastName: "Silva" });
    
    res.json(user);
});

app.listen(port, () => {
  console.log(`API http://localhost:${port}`);
});